"use client"

import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
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
	const router = useRouter()
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
			<div className="w-full h-full">
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
		</div>
	)
}

export default ProductPage