"use client"

import { useWarehouseProduct } from "@/app/(lists)/warehouse-product/_hooks/queries"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Loader2 } from "lucide-react"


const WarehouseProductsPage = () => {

	const { data: warehouseProducts = [], isLoading } = useWarehouseProduct()

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