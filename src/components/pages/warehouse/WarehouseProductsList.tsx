"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

interface WarehouseProduct {
	id: string
	quantity: number
	product: {
		id: string
		name: string
		sku: string
		supplier?: { name: string } | null
	}
}

interface Props {
	warehouseId: string
}


const WarehouseProductsList = ({ warehouseId }: Props) => {

	const { data, isLoading } = useQuery<WarehouseProduct[]>({
		queryKey: ["warehouseProducts", warehouseId],
		queryFn: async () => {
			const response = await api.get(`/warehouse/${warehouseId}/products`)

			return response.data
		}
	})

	if (isLoading) {
		return (
			<div className="space-y-2">
				{[...Array(4)].map((_, i) => (
					<Skeleton key={i} className="h-10 w-full" />
				))}
			</div>
		)
	}

	if (!data || data.length === 0) {
		return <p className="text-sm text-muted-foreground">Nenhum produto neste armazém.</p>
	}

	return (
		<div className="rounded-xl border p-4">
			<h2 className="text-lg font-semibold mb-4">Produtos neste Armazém</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>SKU</TableHead>
						<TableHead>Fornecedor</TableHead>
						<TableHead className="text-right">Quantidade</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((wp) => (
						<TableRow key={wp.id}>
							<TableCell>{wp.product.name}</TableCell>
							<TableCell>{wp.product.sku}</TableCell>
							<TableCell>{wp.product.supplier?.name ?? "—"}</TableCell>
							<TableCell className="text-right">{wp.quantity}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default WarehouseProductsList