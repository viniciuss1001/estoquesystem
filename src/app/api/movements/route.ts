import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
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
      })
    }

    let quantityBefore = 0
    let quantityAfter = 0

    //types needs stock
    if (status === "COMPLETED" && (type === "OUT" || type === "TRANSFER")) {
      if (!originWarehouseId) {
        return new NextResponse("Armazém de origem obigatório.", { status: 400 })
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




    if (status === "COMPLETED") {
      switch (type) {
        case "IN":
          if (!destinationWarehouseId) {
            return new NextResponse("Destino obrigatório para entrada", { status: 400 })
          }

          const destStock = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: destinationWarehouseId,
                productId
              }
            }
          })

          quantityBefore = destStock?.quantity ?? 0
          quantityAfter = quantityBefore + quantity

          // update warehouse
          await prisma.warehouseProduct.upsert({
            where: {
              warehouseId_productId: {
                warehouseId: destinationWarehouseId,
                productId,
              },
            },
            update: {
              quantity: quantityAfter
            },
            create: {
              productId,
              warehouseId: destinationWarehouseId,
              quantity: quantityAfter
            },
          })

          // update total product
          await prisma.product.update({
            where: { id: productId },
            data: {
              quantity: {
                increment: quantity
              }
            }
          })
          break

        case "OUT": {
          if (!originWarehouseId) {
            return new NextResponse("Origem obrigatória para saída", { status: 400 });
          }

          const originStock = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId
              }
            }
          })

          if (!originStock || originStock.quantity < quantity) {
            return new NextResponse("Estoque insuficiente no armazém de origem", { status: 400 })
          }

          quantityBefore = originStock.quantity
          quantityAfter = quantityBefore - quantity

          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
            data: {
              quantity: quantityAfter,
            },
          })

          // update total product
          await prisma.product.update({
            where: { id: productId },
            data: {
              quantity: {
                decrement: quantity
              }
            }
          })

          break;
        }

        case "TRANSFER": {
          if (!originWarehouseId || !destinationWarehouseId) {
            return new NextResponse("Origem e destino são obrigatórios para transferência", { status: 400 });
          }

          const originStock = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId
              }
            }
          })

          if (!originStock || originStock.quantity < quantity) {
            return new NextResponse("Estoque insuficiente no armazém de origem", { status: 400 })
          }

          const detinationStock = await prisma.warehouseProduct.findUnique({
            where: {
              warehouseId_productId: {
                warehouseId: destinationWarehouseId,
                productId
              }
            }
          })

          quantityBefore = originStock.quantity
          quantityAfter = quantityBefore - quantity


          // Decrementa origem
          await prisma.warehouseProduct.update({
            where: {
              warehouseId_productId: {
                warehouseId: originWarehouseId,
                productId,
              },
            },
            data: {
              quantity: quantityAfter
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

    // create movement
    const movement = await prisma.stockMovement.create({
      data: {
        productId,
        quantity,
        type,
        originWarehouseId: type === "IN" ? null : originWarehouseId,
        destinationWarehouseId: type === "OUT" ? null : destinationWarehouseId,
        notes,
        status,
        quantityAfter,
        quantityBefore
      },
    })

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


export async function GET(req: NextRequest) {
  try {

    const { session, error: sessionError } = await requireSession()

    if (sessionError) {
      return sessionError
    }

    const { searchParams } = new URL(req.url)

    const productId = searchParams.get("productId") || undefined
    const type = searchParams.get("type") || undefined
    const status = searchParams.get("status") || undefined
    const originWarehouseId = searchParams.get("originWarehouseId") || undefined
    const destinationWarehouseId = searchParams.get("destinationWarehouseId") || undefined

    const where: any = {
      productId,
      type,
      status,
      originWarehouseId,
      destinationWarehouseId
    }

    const movements = await prisma.stockMovement.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        product: { select: { id: true, name: true } },
        originWareHouse: { select: { id: true, name: true } },
        destinationWarehouse: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(movements)
  } catch (error) {
    console.error("Erro ao buscar movimentações.", error)
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
