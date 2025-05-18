import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

const supplierSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  contactPhone: z.string().min(1),
  deliveryTime: z.coerce.date(),
  description: z.string().optional(),
  products: z.array(z.string()).optional().default([]),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.office !== "ADMIN") {
      return new Response("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const parsed = supplierSchema.parse(json); // <-- valida aqui

    const { name, email, contactPhone, deliveryTime, description, products } = parsed;

    const supplier = await prisma.supplier.create({
      data: {
        name,
        email,
        contactPhone,
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

    return NextResponse.json({ message: "Fornecedor criado com sucesso", supplier });
  } catch (error) {
    console.error("Erro ao criar fornecedor:", error);
    return new NextResponse("Erro ao criar fornecedor", { status: 500 });
  }
}

export async function GET() {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: {createdAt: "desc"}
    })

    return NextResponse.json({suppliers})

  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    return new NextResponse('Erro ao buscar fornecedores', { status: 500 })
  }
}