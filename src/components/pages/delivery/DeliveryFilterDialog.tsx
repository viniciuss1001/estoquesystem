"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProducts, useSuppliers, useWarehouses } from "@/lib/queries"
import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"


const DeliveryFilterDialog = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	// local state
	const [productId, setProductId] = useState<string | undefined>(searchParams.get("productId") || undefined)
	const [supplierId, setSupplierId] = useState<string | undefined>(searchParams.get("supplierId") || undefined)
	const [warehouseId, setWarehouseId] = useState<string | undefined>(searchParams.get("warehouseId") || undefined)
	const [status, setStatus] = useState<string | undefined>(searchParams.get("status") || undefined)

	// query data
	const { data: products = [] } = useProducts()
	const { data: suppliers = [] } = useSuppliers()
	const { data: warehouses = [] } = useWarehouses()

	const hasFilters = productId || supplierId || warehouseId || status

	const applyFilters = () => {
		const params = new URLSearchParams()

		if (productId) params.set("productId", productId)
		if (supplierId) params.set("supplierId", supplierId)
		if (warehouseId) params.set("warehouseId", warehouseId)
		if (status) params.set("status", status)

		startTransition(() => router.push(`?${params.toString()}`))
	}

	const clearFilters = () => {
		setProductId(undefined)
		setSupplierId(undefined)
		setWarehouseId(undefined)
		setStatus(undefined)

		startTransition(() => router.push(window.location.pathname))
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={hasFilters ? "default" : "ghost"}
					className="flex items-center gap-2 justify-center cursor-pointer"
					disabled={isPending}
				>
					<Filter className="w-4 h-4" />
					{hasFilters ? "Filtros (ativos)" : "Filtros"}
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[480px]">
				<DialogHeader>
					<DialogTitle>Filtrar Entregas</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col gap-4 py-2 w-full">
					<Select value={productId} onValueChange={setProductId}>
						<SelectTrigger>
							<SelectValue placeholder="Produto" />
						</SelectTrigger>
						<SelectContent>
							{products.map((p) => (
								<SelectItem key={p.id} value={p.id}>
									{p.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={supplierId} onValueChange={setSupplierId}>
						<SelectTrigger><SelectValue placeholder="Fornecedor" /></SelectTrigger>
						<SelectContent>
							{suppliers.map((s) => (
								<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={warehouseId} onValueChange={setWarehouseId}>
						<SelectTrigger><SelectValue placeholder="Armazém" /></SelectTrigger>
						<SelectContent>
							{warehouses.map((w) => (
								<SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={status} onValueChange={setStatus}>
						<SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
						<SelectContent>
							<SelectItem value="PENDING">Pendente</SelectItem>
							<SelectItem value="COMPLETED">Concluído</SelectItem>
							<SelectItem value="CANCELED">Cancelado</SelectItem>
							<SelectItem value="LATE">Em Atraso</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<DialogFooter className="flex justify-end gap-2">
					<Button variant="destructive" onClick={clearFilters} disabled={!hasFilters}>
						Limpar filtros
					</Button>
					<Button onClick={applyFilters} disabled={isPending}>
						Aplicar filtros
					</Button>
				</DialogFooter>
			</DialogContent>

		</Dialog>
	)
}

export default DeliveryFilterDialog