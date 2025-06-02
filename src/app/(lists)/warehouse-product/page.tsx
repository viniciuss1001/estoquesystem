"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { Loader2, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface WarehouseProduct {
	warehouseId: string
	productId: string
	quantity: number
	warehouse: {
		id: string
		name: string
	}
	product: {
		id: string
		name: string
	}
}


const WarehouseProductsPage = () => {
	const [warehouseProducts, setWarehouseProducts] = useState<WarehouseProduct[]>([])
	const [loading, setLoading] = useState(true)


	const fetchWarehouseProducts = async () => {
		try {
			const response = await api.get("/warehouse-products")
			setWarehouseProducts(response.data)
			setLoading(false)

		} catch (error) {
			toast.error("Erro ao buscar produtos por armazém.")
			setLoading(false)
		}
	}

	const handleDelete = async (warehouseId: string, productId: string) => {
		 try {
			await api.delete(`/warehouse-products/${warehouseId}/${productId}`)
			toast.success("Produto removido do armazém com sucesso!")

			setWarehouseProducts(prev =>
				prev.filter(p => p.warehouseId !== warehouseId || p.productId !== productId)
			)
		 } catch (error) {
			toast.error("Erro ao excluir produto do armazém")
		 }
	}

	useEffect(() => {
		fetchWarehouseProducts()
	}, [])

	if (loading) {
		return <div className="flex items-center justify-center w-full h-full"><Loader2 className="animate-spin" /></div>
	}

  return (
	 <div className="p-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Produtos por Armazém</h2>
				{/* <CreateWarehouseProductModal onCreated={fetchWarehouseProducts} /> */}
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
									{/* <EditWarehouseProductModal
										warehouseProduct={wp}
										onUpdated={fetchWarehouseProducts}
									/> */}
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