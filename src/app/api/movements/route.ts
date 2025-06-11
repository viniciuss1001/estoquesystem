import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const data = await req.json();
    const {
      productId,
      quantity,
      type,
      originWarehouseId,
      destinationWarehouseId,
      status,
      notes,
    } = data;

    // validate positive quantity
    if (status !== "CANCELED" && quantity <= 0) {
      return new NextResponse("Quantidade deve ser maior do que zero.", {
        status: 400,
      });
    }
    //types needs stock
    if (status === "COMPLETED" && (type === "OUT" || type === "TRANSFER")) {
      if (!originWarehouseId) {
        return new NextResponse("Armazém de origem obigatório.", {
          status: 400,
        });
      }

      const stock = await prisma.warehouseProduct.findUnique({
        where: {
          warehouseId_productId: {
            warehouseId: originWarehouseId,
            productId,
          },
        },
      });

      if (!stock || stock.quantity < quantity) {
        return new NextResponse("Estoque insuficiente no armazém de origem", {
          status: 400,
        });
      }
    }

    // create movement
    const movement = await prisma.stockMovement.create({
      data: {
        productId,
        quantity,
        type,
        originWarehouseId,
        destinationWarehouseId,
        notes,
        status,
      },
    })
    

    if (status === "COMPLETED") {
      switch (type) {
        case "IN":
          if (!destinationWarehouseId) {
            return new NextResponse("Destino obrigatório para entrada", { status: 400 });
          }

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
              productId,
              warehouseId: destinationWarehouseId,
              quantity,
            },
          });
          break;

        case "OUT": {
          if (!originWarehouseId) {
            return new NextResponse("Origem obrigatória para saída", { status: 400 });
          }

          const warehouseProduct = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
          });

          if (!warehouseProduct || warehouseProduct.quantity < quantity) {
            return new NextResponse("Estoque insuficiente no armazém de origem", { status: 400 });
          }

          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
            data: {
              quantity: {
                decrement: quantity,
              },
            },
          })
          
          break;
        }

        case "TRANSFER": {
          if (!originWarehouseId || !destinationWarehouseId) {
            return new NextResponse("Origem e destino são obrigatórios para transferência", { status: 400 });
          }

          const warehouseProduct = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
          });

          if (!warehouseProduct || warehouseProduct.quantity < quantity) {
            return new NextResponse("Estoque insuficiente no armazém de origem", { status: 400 });
          }

          // Decrementa origem
          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
            data: {
              quantity: {
                decrement: quantity,
              },
            },
          });

          // Incrementa ou cria destino
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
              productId,
              warehouseId: destinationWarehouseId,
              quantity,
            },
          });
          break;
        }
      }
    }


    await logAction({
      userId: session?.user.id,
      action: "create",
      entity: "movement",
      entityId: movement.id,
      description: `Movimentação criada: ${type} de ${quantity} unidades`,
    });

    return NextResponse.json({
      message: "Movimentação registrada com sucesso",
      movement,
    });
  } catch (error) {
    console.error("Erro ao registrar movimentação:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Não autorizado", { status: 401 });
  }

  try {
    const movements = await prisma.stockMovement.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        product: true,
        originWareHouse: true,
        destinationWarehouse: true,
      },
    });

    return NextResponse.json({ movements });
  } catch (error) {
    console.error("Erro ao buscar movimentações.", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
