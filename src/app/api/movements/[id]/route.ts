import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const movement = await prisma.stockMovement.findUnique({
    where: { id },
    include: {
      originWareHouse: true,
      destinationWarehouse: true,
      product: true,
    },
  });

  if (!movement) {
    return NextResponse.json(
      { error: "Movimentação não encontrada." },
      { status: 404 },
    );
  }

  return NextResponse.json({ movement });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.office !== "ADMIN") {
      return new Response("Unauthorized", { status: 401 });
    }
    const { id } = params;
    const body = await req.json();

    const {
      type,
      quantity,
      originWarehouseId,
      destinationWarehouseId,
      notes,
      status,
    } = body;

    if (!type || !quantity || quantity <= 0) {
      return new NextResponse("Dados inválidos", { status: 400 });
    }

    const existingMovement = await prisma.stockMovement.findUnique({
      where: { id },
    });

    if (!existingMovement) {
      return new NextResponse("Movimentação não encontrada.", { status: 404 });
    }

    const productId = existingMovement.productId;

    //  revert if is COMPLETED
    if (existingMovement.status === "COMPLETED") {
      if (existingMovement.type === "TRANSFER") {
        if (existingMovement.originWarehouseId) {
          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: existingMovement.originWarehouseId,
                productId
              }
            },
            data: {
              quantity: {
                increment: existingMovement.quantity
              }
            }
          })
        }

        if (existingMovement.destinationWarehouseId) {
          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: existingMovement.destinationWarehouseId,
                productId,
              },
            },
            data: {
              quantity: { decrement: existingMovement.quantity },
            },
          })
        }
      }
    }

    // if new status is completed, verify stock
    if (status === "COMPLETED" && type === "TRANSFER") {
      if (!originWarehouseId || !destinationWarehouseId) {
        return new NextResponse("Armazéns obrigatórios para transferência", { status: 400 });
      }

      const originStock = await prisma.warehouseProduct.findUnique({
        where: {
          warehouseId_productId: {
            warehouseId: originWarehouseId,
            productId,
          },
        },
      });

      if (!originStock || originStock.quantity < quantity) {
        return new NextResponse("Estoque insuficiente no armazém de origem", { status: 400 });
      }
    }

    //apply new effect if final status is COMPLETED
    if (status === "COMPLETED") {
      switch (type) {
        case "TRANSFER":
          // Decrementa origem
          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId!,
                productId,
              },
            },
            data: {
              quantity: { decrement: quantity },
            },
          });

          // orogin decrement
          await prisma.warehouseProduct.upsert({
            where: {
              warehouseId_productId: {
                warehouseId: destinationWarehouseId!,
                productId,
              },
            },
            update: {
              quantity: { increment: quantity },
            },
            create: {
              warehouseId: destinationWarehouseId!,
              productId,
              quantity,
            },
          });
          break
      }
    }
    const updatedMovement = await prisma.stockMovement.update({
      where: { id },
      data: {
        type,
        quantity,
        originWarehouseId,
        destinationWarehouseId,
        notes,
        status,
      },
    })

    await logAction({
      userId: session.user.id,
      action: "update",
      entity: "movement",
      entityId: updatedMovement.id,
      description: `Movimentação alterada: ${updatedMovement.id}`,
    });

    return NextResponse.json({ updatedMovement })
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao atualizar Movimentação" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.office !== "ADMIN") {
      return new Response("Unauthorized", { status: 401 });
    }

    await prisma.stockMovement.delete({
      where: { id: params.id },
    });
    await logAction({
      userId: session.user.id,
      action: "delete",
      entity: "movement",
      entityId: params.id,
      description: `Movimentação Apagada: ${params.id}`,
    });

    return NextResponse.json({ mensagem: "Produto deletado com sucesso" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao deletar movimentação." },
      { status: 500 },
    );
  }
}
