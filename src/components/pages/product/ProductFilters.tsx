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
		if (usageStatus) params.set("status", usageStatus)

		startTransition(() => {
			router.push(`?${params.toString()}`)
		})
	}

	const resetQuery = () => {
		setCategoryId(undefined)
		setSupplierId(undefined)
		setWarehouseId(undefined)
		setUsageStatus(undefined)
		startTransition(() => router.push(window.location.pathname))
	}

	const isLoading = categoriesLoading || supplierLoading || warehouseLoading

	const hasFilters = categoryId || supplierId || warehouseId || usageStatus

	return (

		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={hasFilters ? "default" : "ghost"}
					className='flex cursor-pointer items-center mb-auto gap-2'
					disabled={isPending || isLoading}>
					<Filter className="w-4 h-4" />
					{hasFilters ? "Filtros (ativos)" : "Filtros"}
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>Filtrar Produtos</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col gap-4 py-2">

					{/* category */}
					<Select
						value={categoryId}
						onValueChange={setCategoryId}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Categoria" />
						</SelectTrigger>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category.id} value={category.id}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* supplier */}
					<Select
						value={supplierId}
						onValueChange={setSupplierId}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Fornecedor" />
						</SelectTrigger>
						<SelectContent>
							{suppliers.map((supplier) => (
								<SelectItem key={supplier.id} value={supplier.id}>
									{supplier.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

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
					<Select
						value={warehouseId}
						onValueChange={setWarehouseId}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Armazém" />
						</SelectTrigger>
						<SelectContent>
							{warehouses.map((warehouse) => (
								<SelectItem key={warehouse.id} value={warehouse.id}>
									{warehouse.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<DialogFooter className="flex items-center justify-end gap-2">
					<Button
						variant="destructive"
						className="self-end text-sm cursor-pointer"
						onClick={() => resetQuery()}

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