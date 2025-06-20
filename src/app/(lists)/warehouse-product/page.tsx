"use client"

import CreateWarehouseProductModal from "@/components/pages/warehouse-product/CreateWarehouseProductModal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { WarehouseProduct } from "@/types/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader2, Trash } from "lucide-react"
import { toast } from "sonner"


const WarehouseProductsPage = () => {
	
	const queryClient = useQueryClient()

	const {data: warehouseProducts = [], isLoading} = useQuery({
		queryKey: ['warehouseProducts'],
		queryFn: async () => {
			const response = await api.get('/warehouse-product')
			return response.data as WarehouseProduct[]
		}

	})

	const deleteMutation = useMutation({
		mutationFn: async ({warehouseId, productId}: {warehouseId: string, productId: string}) => {
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
	deleteMutation.mutate({warehouseId, productId})
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
				<CreateWarehouseProductModal />
			</div>

			{warehouseProducts.length === 0 ? (
				<p>Nenhum produto vinculado a armazéns.</p>
			) : (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead>Armazém</TableHead>
							<TableHead>Quantidade</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{warehouseProducts.map((wp) => (
							<TableRow key={`${wp.warehouseId}-${wp.productId}`}>
								<TableCell>{wp.product.name}</TableCell>
								<TableCell>{wp.warehouse.name}</TableCell>
								<TableCell>{wp.quantity}</TableCell>
								<TableCell className="flex items-center justify-end gap-2">
									<div className="cursor-no-drop blur">
										{/* <EditWarehouseProductModal
											productId={wp.productId}
											currentQuantity={wp.quantity}
											warehouseId={wp.warehouseId}
											onUpdated={fetchWarehouseProducts}
										/> */}
									</div>
									<Button
										variant="destructive"
										onClick={() => handleDelete(wp.warehouseId, wp.productId)}
										className="flex gap-2"
									>
										<Trash className="w-4 h-4" />
										Deletar
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	)

}

export default WarehouseProductsPage