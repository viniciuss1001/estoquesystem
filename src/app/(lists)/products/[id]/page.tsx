"use client"

import ProductMovementsComponent from "@/components/pages/product/ProductMovements"
import {
	Breadcrumb, BreadcrumbLink, BreadcrumbList,
	BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Product {
	id: string
	name: string
	sku: string
	quantity: string
	price: number
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
	const [product, setProduct] = useState<Product | null>(null)
	const { id } = useParams()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		api.get(`/product/${id}`)
			.then((response) => {
				setProduct(response.data)
			})
			.catch(() => {
				toast.error("Erro ao buscar produto.")
			})
			.finally(() => {
				setLoading(false)
			})
	}, [id])

	if (loading) {
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

	return (
		<div className="p-6 max-w-full">

			<div className="mb-2 flex p-2">
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
					<h2 className="text-lg font-medium mb-2">Informações do Produto</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-white">
						<p><span className="font-semibold">SKU:</span> {product.sku}</p>
						<p><span className="font-semibold">Categoria:</span> {product.category?.name ?? "Não definida"}</p>
						<p><span className="font-semibold">Quantidade em estoque:</span> {product.quantity} unidade(s)</p>
						<p><span className="font-semibold">Preço:</span> R$ {product.price.toFixed(2)}</p>
						<p><span className="font-semibold">Fornecedor:</span> {product.supplier?.name ?? "Não informado"}</p>
					</div>
				</div>

				<div className="border rounded-xl p-4 shadow-sm bg-background">
					<h2 className="text-lg font-medium mb-2">Datas</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-zinc-300">
						<p><span className="font-semibold">Criado em:</span> {new Date(product.createdAt).toLocaleDateString()}</p>
						<p><span className="font-semibold">Atualizado em:</span> {new Date(product.updatedAt).toLocaleDateString()}</p>
					</div>
				</div>
			</div>


			<h2 className="text-2xl p-4">Movimentações do produto:</h2>
			<ProductMovementsComponent productId={product.id} />
		</div>
	)
}

export default ProductPage
