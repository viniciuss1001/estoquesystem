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

    //revert old movement
    if (existingMovement.type === "IN") {
      await prisma.product.update({
        where: { id: productId },
        data: {
          quantity: { decrement: existingMovement.quantity },
        },
      });
    } else if (existingMovement.type === "OUT") {
      await prisma.product.update({
        where: { id: productId },
        data: {
          quantity: { increment: existingMovement.quantity },
        },
      });
    }

    //if TRANSFER is COMPLETED,
    if (
      existingMovement.type === "TRANSFER" &&
      existingMovement.status === "COMPLETED" &&
      existingMovement.destinationWarehouseId
    ) {
      await prisma.warehouseProduct.updateMany({
        where: {
          productId,
          warehouseId: existingMovement.destinationWarehouseId,
        },
        data: {
          quantity: { decrement: existingMovement.quantity },
        },
      });
    }
    // aplly new transfer
    if (type === "IN") {
      await prisma.product.update({
        where: { id: productId },
        data: {
          quantity: { increment: quantity },
        },
      });
    } else if (type === "OUT") {
      await prisma.product.update({
        where: { id: productId },
        data: {
          quantity: { decrement: quantity },
        },
      });
    }

    // if TRANSFER and COMPLETED => aplly
    if (
      type === "TRANSFER" &&
      status === "COMPLETED" &&
      destinationWarehouseId
    ) {
      //for exists register

      await prisma.warehouseProduct.upsert({
        where: {
          warehouseId_productId: {
            warehouseId: destinationWarehouseId,
            productId,
          },
        },
        update: {
          quantity: {
            increment: quantity,
          },
        },
        create: {
          warehouseId: destinationWarehouseId,
          productId,
          quantity,
        },
      });
    }

    // if TRANSFER decrement origin - immediatly
    if (type === "TRANSFER" && originWarehouseId) {
      await prisma.warehouseProduct.updateMany({
        where: {
          productId,
          warehouseId: originWarehouseId,
        },
        data: {
          quantity: { decrement: quantity },
        },
      });
    }

    //update movement
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
    });

    await logAction({
      userId: session.user.id,
      action: "update",
      entity: "movement",
      entityId: updatedMovement.id,
      description: `Movimentação alterada: ${updatedMovement.id}`,
    });

    return NextResponse.json({ updatedMovement });
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
