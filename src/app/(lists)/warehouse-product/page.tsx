"use client"

import CreateWarehouseProductModal from "@/app/(lists)/warehouse-product/_components/CreateWarehouseProductModal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { useWarehouseProduct } from "@/app/(lists)/warehouse-product/_hooks/queries"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Trash } from "lucide-react"
import { toast } from "sonner"


const WarehouseProductsPage = () => {

	const queryClient = useQueryClient()

	const { data: warehouseProducts = [], isLoading } = useWarehouseProduct()

	const deleteMutation = useMutation({
		mutationFn: async ({ warehouseId, productId }: { warehouseId: string, productId: string }) => {
			api.delete(`/warehouse-product/${warehouseId}/${productId}`)
		},
		onSuccess: () => {
			toast.success("Produto removido do armazém com sucesso!")
			queryClient.invalidateQueries({ queryKey: ['warehouseProducts'] })
		},
		onError: () => {
			toast.error("Erro ao deletar produto")
		}
	})

	const handleDelete = (warehouseId: string, productId: string) => {
		deleteMutation.mutate({ warehouseId, productId })
	}

	if (isLoading) {
		return (
			<div className="flex items-center justify-center w-full h-full">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Produtos por Armazém</h2>
				
			</div>

			{warehouseProducts.length === 0 ? (
				<p>Nenhum produto vinculado a armazéns.</p>
			) : (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead>SKU</TableHead>
							<TableHead>Armazém</TableHead>
							<TableHead>Quantidade</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>

						{warehouseProducts.map((warehouse) =>
							warehouse.products.map((product) => (
								<TableRow key={`${warehouse.warehouseId}-${product.productId}`}>
									<TableCell>{product.name}</TableCell>
									<TableCell>{product.sku}</TableCell>
									<TableCell>{warehouse.warehouseName}</TableCell>
									<TableCell>{product.quantity}</TableCell>
									<TableCell className="flex items-center justify-end gap-2">
										-
									</TableCell>
								</TableRow>
							))
						)}



					</TableBody>
				</Table>
			)}
		</div>
	)

}

export default WarehouseProductsPage