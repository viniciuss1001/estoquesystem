"use client"

import WarehouseMovementHistory from "@/components/pages/warehouse/WarehouseMovementHistory"
import WarehouseProductsList from "@/components/pages/warehouse/WarehouseProductsList"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import api from "@/lib/axios"
import { Warehouse } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"


const WarehouseIdPage = () => {

	const { id } = useParams()
	
	const {data: warehouse, isLoading} = useQuery({
		queryKey: ['warehouse', id],
		queryFn: async () => {
			const response = await api.get(`/warehouse/${id}`)
			return response.data as Warehouse
		}
	})

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	if (!warehouse) {
		return (
			<div className="p-6 max-w-full">
				<h2 className="text-xl font-bold">Armazém não encontrado.</h2>
			</div>
		)
	}

	return (
		<div className='p-6'>

			<div className="mb-2 flex p-2">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbLink href="/">Início</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbLink href="/warehouses">Armazéns</BreadcrumbLink>
						<BreadcrumbSeparator />
						<BreadcrumbPage>{warehouse.name}</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<Card className="rounded-2xl shadow-md bg-background">
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle className="text-2xl font-semibold">{warehouse.name}</CardTitle>
						{warehouse.location && (
							<p className="text-muted-foreground text-sm">{warehouse.location}</p>
						)}
					</div>
					<Button variant="outline" >
						Editar
					</Button>
				</CardHeader>
				<Separator />
				<CardContent className="mt-4 space-y-4">
					<div>
						<h3 className="text-sm font-medium text-muted-foreground">Descrição</h3>
						<p className="text-base text-foreground">{warehouse.description}</p>
					</div>

					<div>
						<h3 className="text-sm font-medium text-muted-foreground">ID do Armazém</h3>
						<Badge variant="secondary" className="mt-1 p-2 text-sm">
							{warehouse.id}
						</Badge>
					</div>


					<div className="mt-5">
						<h2 className="text-2xl mt-4 pt-2 mb-6">Produtos do Armazém</h2>
						<WarehouseProductsList warehouseId={warehouse.id} />
					</div>

					<div className="mt-5">
						<h2 className="text-2xl mt-4 pt-2 mb-6">Movimentações do Armazém</h2>
						<WarehouseMovementHistory warehouseId={warehouse.id} />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default WarehouseIdPage