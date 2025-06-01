"use client"

import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Delivery {
	id: string
	product: {
		id: string
		name: string
	}
	quantity: number
	supplier: {
		id: string
		name: string
	}
	expectedAt: string
	status: "PENDING" | "COMPLETED" | "CANCELLED"
}

const page = () => {
	const [delivery, setDelivery] = useState<Delivery | null>(null)
	const { id } = useParams()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		api.get(`/delivery/${id}`)
			.then((response) => {
				setDelivery(response.data)
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

	if (!delivery) {
		return (
			<div className="p-6">
				<h2 className="text-xl font-bold">Entrega não encontrado.</h2>
			</div>
		)
	}


	return (
		<div className="p-6">

			<div className="mb-2 flex p-2">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbLink href="/">Início</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbLink href="/delivery">Entregas</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbPage>Entrega: {delivery.product.name}</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="border rounded-xl p-4 shadow-sm bg-background">
					<h2 className="text-lg font-medium mb-2">Informações da Entrega</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-white">
						<p><span className="font-semibold">Produto:</span> {delivery.product.name}</p>
						<p><span className="font-semibold">Quantidade:</span> {delivery.quantity ?? "Não definida"}</p>
						<p><span className="font-semibold">Fornecedor:</span> {delivery.supplier.name}</p>
					</div>
				</div>

				<div className="border rounded-xl p-4 shadow-sm bg-background">
					<h2 className="text-lg font-medium mb-2">Data e Estado</h2>
					<div className="space-y-2 text-sm text-gray-700 dark:text-zinc-300">
						<p><span className="font-semibold">Entrega prevista para:</span> {new Date(delivery.expectedAt).toLocaleDateString()}</p>
						<p><span className="font-semibold">Estado:</span> {delivery.status}</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default page