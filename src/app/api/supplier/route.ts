import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const supplierSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  contactPhone: z.string().min(1),
  cnpj: z.string().optional(),
  deliveryTime: z.coerce.date(),
  description: z.string().optional(),
  products: z.array(z.string()).optional().default([]),
});

export async function POST(req: Request) {
  try {
    const { session, error: sessionError } = await requireSession()
    if (sessionError) return sessionError

    const json = await req.json()
    const parsed = supplierSchema.parse(json)

    const { name, email, contactPhone, deliveryTime, description, products, cnpj } = parsed

    const supplier = await prisma.supplier.create({
      data: {
        name,
        email,
        contactPhone,
        cnpj,
        deliveryTime,
        description: description || "",
      },
    });

    if (products.length > 0) {
      await prisma.product.updateMany({
        where: {
          id: {
            in: products,
          },
        },
        data: {
          supplierId: supplier.id,
        },
      });
    }

    await notifyByUserRole({
      title: "Novo fornecedor adicionado",
      message: `Novo fornecedor adicionado ${supplier.name}.`,
      roles: ["GESTOR"]
    })

    await notifyByUserRole({
      title: "Fornecedor criado por gestor.",
      message: `${session.user.name} criou o fornecedor: ${supplier.name}`,
      roles: ["ADMIN"]
    })

    await logAction({
      userId: session.user.id,
      action: "create",
      entity: "supplier",
      entityId: supplier.id,
      description: `Fornecedor criado: ${supplier.name}`
    })

    return NextResponse.json({ message: "Fornecedor criado com sucesso", supplier })

  } catch (error) {
    console.error("Erro ao criar fornecedor:", error)
    return new NextResponse("Erro ao criar fornecedor", { status: 500 })
  }
}

export async function GET() {
  try {
    const { session, error: sessionError } = await requireSession()
    if (sessionError) return sessionError

    const suppliers = await prisma.supplier.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        contactPhone: true,
        cnpj: true,
        description: true,
        deliveryTime: true,
        createdAt: true
      }
    })

    return NextResponse.json({ suppliers })

  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    return new NextResponse('Erro ao buscar fornecedores', { status: 500 })
  }
}