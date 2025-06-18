"use client"

import ProductMovementsComponent from "@/components/pages/product/ProductMovements"
import ProductWarehouseDistribuition from "@/components/pages/product/ProductWarehouseDistribuition"
import {
	Breadcrumb, BreadcrumbLink, BreadcrumbList,
	BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import api from "@/lib/axios"
import {
	Loader2,
	PackageCheck,
	CalendarCheck,
	Boxes,
	PackageSearch,
	Tag,
	User2,
	PackageX,
	AlertTriangle
} from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useQuery } from "@tanstack/react-query"

interface Product {
	id: string
	name: string
	sku: string
	quantity: string
	price: number
	expirationDate?: string
	usageStatus?: "IN_STOCK" | "IN_USE" | "CONSUMED"
	category?: {
		id: string
		name: string
		createdAt: string
		updatedAt: string
	}
	createdAt: string
	updatedAt: string
	supplier: {
		id: string
		name: string
	}
}

const ProductPage = () => {
	const { id } = useParams()
	
	const {data: product, isLoading} = useQuery({
		queryKey: ['product', id],
		queryFn: async () => {
			const response = await api.get(`/product/${id}`)
			return response.data as Product
		},
		enabled: !!id,
		
	})

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	if (!product) {
		return (
			<div className="p-6">
				<h2 className="text-xl font-bold">Produto não encontrado.</h2>
			</div>
		)
	}

	const usageStatusMap = {
		IN_STOCK: { label: "Em estoque", color: "default", icon: <Boxes className="w-4 h-4 text-green-800" /> },
		IN_USE: { label: "Em uso", color: "blue", icon: <PackageCheck className="w-4 h-4 text-blue-500" /> },
		CONSUMED: { label: "Consumido", color: "red", icon: <PackageX className="w-4 h-4 text-orange-900" /> },
	}

	const usage = product.usageStatus ? usageStatusMap[product.usageStatus] : null

	return (
		<div className="p-6 max-w-full">

			<div className="mb-4 flex p-2">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbLink href="/">Início</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbLink href="/products">Produtos</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbPage>{product.name}</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="border rounded-xl p-4 shadow-sm bg-background">
					<h2 className="text-2xl font-medium mb-2 flex items-center gap-2">
						<PackageSearch className="w-5 h-5" /> Informações do Produto
					</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-white">
						<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
							<Tag className="w-4 h-4" /> SKU:</span> {" "} {product.sku}</p>
						<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
							<Boxes className="w-4 h-4" /> Categoria: </span> {product.category?.name ?? "Não definida"}</p>
						<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
							<Boxes className="w-4 h-4" /> Quantidade em estoque:</span> {product.quantity} unidade(s)</p>
						<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
							<Tag className="w-4 h-4" /> Preço:</span> R$ {product.price.toFixed(2)}</p>
						<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
							<User2 className="w-4 h-4" /> Fornecedor:</span> {product.supplier?.name ?? "Não informado"}</p>
						{usage && (
							<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">Estado:</span>
								<Badge variant={usage.color as any} className="ml-2 flex items-center gap-1 p-2">
									{usage.icon} {usage.label}
								</Badge>
							</p>
						)}
						<div className="w-full flex gap-2 items-center justify-between">

							{product.expirationDate && (
								<p className="flex gap-2"><span className="font-semibold flex items-center gap-1">
									<CalendarCheck className="w-4 h-4" /> Validade:</span> {new Date(product.expirationDate).toLocaleDateString()}
								</p>
							)}

							{product.expirationDate && (() => {
								const today = new Date()
								const expiration = new Date(product.expirationDate)

								const isToday =
									today.getFullYear() === expiration.getFullYear() &&
									today.getMonth() === expiration.getMonth() &&
									today.getDate() === expiration.getDate()

								return isToday ? (
									<Badge variant="destructive" className="flex items-center gap-2 h-8">
										<AlertTriangle className="w-4 h-4" />
										Produto expira hoje
									</Badge>
								) : null
							})()}

						</div>


					</div>
				</div>

				<div className="border rounded-xl p-4 shadow-sm bg-background">
					<h2 className="text-lg font-medium mb-2 flex items-center gap-2">
						<CalendarCheck className="w-5 h-5" /> Datas
					</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-zinc-300">
						<p>
							<span className="font-semibold">Criado em:</span> {new Date(product.createdAt).toLocaleDateString()}</p>
						<p>
							<span className="font-semibold">Atualizado em:</span> {new Date(product.updatedAt).toLocaleDateString()}
						</p>
					</div>
				</div>
			</div>

			<h2 className="text-2xl mt-6 pt-4">Produto por Armazém:</h2>
			<ProductWarehouseDistribuition productId={product.id} />

			<h2 className="text-2xl mt-6 p-2">Movimentações do produto:</h2>
			<ProductMovementsComponent productId={product.id} />
		</div>
	)
}

export default ProductPage
