import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const { searchParams } = new URL(req.url)
	const query = searchParams.get("q")

	if (!query || query.length < 2) {
		return NextResponse.json([])
	}

	const results = await Promise.all([
		prisma.product.findMany({
			where: {
				name: {
					contains: query,
					mode: "insensitive"
				}
			},
			select: {
				id: true,
				name: true,
				category: {
					select: { name: true }
				}
			}
		}),

		prisma.supplier.findMany({
			where: {
				name: {
					contains: query,
					mode: "insensitive"
				}
			},
			select: {
				id: true,
				name: true
			}
		}),

		prisma.wareHouse.findMany({
			where: {
				name: {
					contains: query,
					mode: "insensitive"
				}
			},
			select: {
				id: true,
				name: true
			}
		}),

		prisma.category.findMany({
			where: {
				name: {
					contains: query,
					mode: "insensitive"
				}
			},
			select: {
				id: true,
				name: true,

			}
		}),

		prisma.user.findMany({
			where: {
				name: {
					contains: query,
					mode: "insensitive",
				},
			},
			select: { id: true, name: true, email: true },
		}),

		prisma.supplierInvoice.findMany({
			where: {
				title: {
					contains: query,
					mode: "insensitive"
				}
			},
			select: {
				id: true,
				title: true,
				description: true,
			}
		})

	])

	const [
		products,
		suppliers,
		warehouses,
		categories,
		users,
		invoices,
	] = results

	const mapped = [
		...products.map((product) => ({
			id: product.id,
			type: "product",
			label: product.name,
			sublabel: product.category?.name || "Produto",
			href: `/products/${product.id}`,
		})),
		...suppliers.map((supplier) => ({
			id: supplier.id,
			type: "supplier",
			label: supplier.name,
			sublabel: "Fornecedor",
			href: `/suppliers/${supplier.id}`,
		})),
		...warehouses.map((warehouse) => ({
			id: warehouse.id,
			type: "warehouse",
			label: warehouse.name,
			sublabel: "Armazém",
			href: `/warehouses/${warehouse.id}`,
		})),
		...categories.map((category) => ({
			id: category.id,
			type: "category",
			label: category.name,
			sublabel: "Categoria",
			href: `/categories/${category.id}`,
		})),
		...users.map((users) => ({
			id: users.id,
			type: "user",
			label: users.name,
			sublabel: users.email,
			href: `/users/${users.id}`,
		})),
		...invoices.map((invoices) => ({
			id: invoices.id,
			type: "invoice",
			label: invoices.description,
			sublabel: "Boleto de fornecedor",
			href: `/supplier-invoice/${invoices.id}`,
		})),
	]

	return NextResponse.json(mapped)
}