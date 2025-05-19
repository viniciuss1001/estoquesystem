"use client"

import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
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
	category?: string
	createdAt: string
	updatedAt: string
	supplier: {
		id: string
		name: string
	}
}

const ProductPage = () => {
	const [product, setProduct] = useState<Product>()
	const { id } = useParams()
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		api.get(`/product/${id}`)
			.then((response) => {
				const product = response.data
				setProduct(product)
			})
			.catch(() => {
				toast.error("Erro ao buscar produto.")
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])


	if (loading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	return (
		<div className="p-6 max-w-full">
			<div className="mb-2 flex p-2 ">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbLink href="/">
							Início
						</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbLink href="/products">
							Produtos
						</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbPage>
							{product?.name}
						</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<h2 className="text-xl m-2">
				<span className="font-bold">
					Produto:
				</span>
				{" "}{product?.name}
			</h2>
			<div className="border rounded-md p-2 w-3/4 flex items-center justify-start gap-2 mt-4">
				<span className="font-bold uppercase m-1">
					SKU: {" "}
				</span>
				<span >
					{product?.sku}
				</span>
			</div>
			<div className="flex gap-2 mt-4">
				<span className="font-bold ">
					Categoria: {" "}
				</span>
				<div className="pl-3 pr-3 pt-1 pb-1 text-white mr-3 flex rounded-sm bg-blue-800 text-sm">
					{product?.category}
				</div>
			</div>
			<h3 className="mt-4 ">
				<span className="font-bold">
					Quantidade:
				</span>
				{" "}{product?.quantity} unidade(s) restante.
			</h3>

			<h3 className="mt-4 ">
				<span className="font-bold">
					Valor:
				</span>
				{" "} R$:{product?.price}
			</h3>

			<h3 className="mt-4 ">
				<span className="font-bold">
					Fornecedor:
				</span>
				{" "} {product?.supplier ?? ''}
			</h3>

			<div className="border rounded-md p-2 w-3/4 flex items-center justify-between gap-2 mt-4">
				<div>
					<span className="font-bold m-1">
						Criado em: {" "}
					</span>
					<span >
						{new Date(product?.createdAt ?? '').toLocaleDateString()}
					</span>
				</div>
				<div>
					<span className="font-bold  m-1">
						Alterado em: {" "}
					</span>
					<span >
						{new Date(product?.updatedAt ?? '').toLocaleDateString()}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProductPage