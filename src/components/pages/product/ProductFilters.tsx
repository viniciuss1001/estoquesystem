"use client"

import Combobox from "@/components/shared/Combobox"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCategories, useSuppliers, useWarehouses } from "@/lib/queries"
import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"


const ProductFilters = () => {

	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	// local states
	const [categoryId, setCategoryId] = useState<string | undefined>(searchParams.get("categoryId") || undefined)
	const [supplierId, setSupplierId] = useState<string | undefined>(searchParams.get("supplierId") || undefined)
	const [warehouseId, setWarehouseId] = useState<string | undefined>(searchParams.get("warehouseId") || undefined)
	const [usageStatus, setUsageStatus] = useState<string | undefined>(searchParams.get("usageStatus") || undefined)

	const { data: categories = [], isLoading: categoriesLoading } = useCategories()
	
	const { data: suppliers = [], isLoading: supplierLoading } = useSuppliers()

	const { data: warehouses = [], isLoading: warehouseLoading } = useWarehouses()

	function handleApplyFilters() {
		const params = new URLSearchParams()

		if (categoryId) params.set("categoryId", categoryId)
		if (supplierId) params.set("supplierId", supplierId)
		if (warehouseId) params.set("warehouseId", warehouseId)
		if (usageStatus) params.set("usageStatus", usageStatus)

		startTransition(() => {
			router.push(`?${params.toString()}`)
		})
	}

	const isLoading = categoriesLoading || supplierLoading || warehouseLoading

	return (

		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className='flex cursor-pointer items-center mb-auto gap-2' disabled={isPending || isLoading}>
					<Filter className="w-4 h-4" />
					Filtros
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>Filtrar Produtos</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col gap-4 py-2">

					{/* category */}
					<Combobox
						items={categories}
						placeholder="Categoria"
						selectedId={categoryId}
						onChange={setCategoryId}
					/>

					{/* supplier */}
					<Combobox
						items={suppliers}
						placeholder="Fornecedor"
						selectedId={supplierId}
						onChange={setSupplierId}
					/>

					{/* Status */}
					<Select
						defaultValue={usageStatus}
						onValueChange={setUsageStatus}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="IN_STOCK">Em estoque</SelectItem>
							<SelectItem value="IN_USE">Em uso</SelectItem>
							<SelectItem value="CONSUMED">Consumido</SelectItem>
						</SelectContent>
					</Select>

					{/* warehouse */}
					<Combobox
						items={warehouses}
						placeholder="Armazém"
						selectedId={warehouseId}
						onChange={setWarehouseId}
					/>
				</div>

				<DialogFooter className="flex items-center justify-end gap-2">
					<Button
						variant="destructive"
						className="self-end text-sm cursor-pointer"
						onClick={() => {
							startTransition(() => router.push(window.location.pathname))
						}}
					>
						Limpar filtros
					</Button>

					<Button
						onClick={handleApplyFilters}
						className="mt-2 cursor-pointer"
						disabled={isPending}
					>
						Aplicar Filtros
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>

	)
}

export default ProductFilters