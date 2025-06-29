"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useProducts, useWarehouses } from '@/lib/queries'
import { Filter } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'

const MovementFilterDialog = () => {

	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	// local state
	const [productId, setProductId] = useState<string | undefined>(searchParams.get("productId") || undefined)
	const [type, setType] = useState<string | undefined>(searchParams.get("type") || undefined)
	const [status, setStatus] = useState<string | undefined>(searchParams.get("status") || undefined)
	const [originWarehouseId, setOriginWarehouse] = useState<string | undefined>(searchParams.get("originWarehouseId") || undefined)
	const [destinationWarehouseId, setDestWarehouse] = useState<string | undefined>(searchParams.get("destinationWarehouseId") || undefined)

	// fetch data
	const { data: products = [] } = useProducts()
	const { data: warehouses = [] } = useWarehouses()

	// active filters
	const hasFilters = productId || type || status || originWarehouseId || destinationWarehouseId

	// apply filters
	const applyFilters = () => {
		const params = new URLSearchParams()

		if (productId) params.set("productId", productId)
		if (type) params.set("type", type)
		if (status) params.set("status", status)
		if (originWarehouseId) params.set("originWarehouseId", originWarehouseId)
		if (destinationWarehouseId) params.set("destinationWarehouseId", destinationWarehouseId)

		startTransition(() => router.push(`?${params.toString()}`))
	}

	// reset filters
	const clearFilters = () => {
		setProductId(undefined)
		setType(undefined)
		setStatus(undefined)
		setOriginWarehouse(undefined)
		setDestWarehouse(undefined)
		startTransition(() => router.push(window.location.pathname))
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={hasFilters ? "default" : "ghost"}
					className="flex items-center gap-2 justify-center cursor-pointer"
					disabled={isPending}
				>
					<Filter className="w-4 h-4" />
					{hasFilters ? "Filtros (ativos)" : "Filtros"}
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[480px]">
				<DialogHeader>
					<DialogTitle>Filtrar Movimentações</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col gap-4 py-2 w-full">
					{/* product */}
					<Select value={productId} onValueChange={setProductId}>
						<SelectTrigger>
							<SelectValue placeholder="Produto" />
						</SelectTrigger>
						<SelectContent className='w-full'>
							{products.map(p => (
								<SelectItem key={p.id} value={p.id}>
									{p.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* type */}
					<Select value={type} onValueChange={setType}>
						<SelectTrigger><SelectValue placeholder="Tipo" /></SelectTrigger>
						<SelectContent>
							<SelectItem value="IN">Entrada</SelectItem>
							<SelectItem value="OUT">Saída</SelectItem>
							<SelectItem value="TRANSFER">Transferência</SelectItem>
						</SelectContent>
					</Select>

					{/* Status */}
					<Select value={status} onValueChange={setStatus}>
						<SelectTrigger>
							<SelectValue placeholder="Status" />
							</SelectTrigger>
						<SelectContent>
							<SelectItem value="PENDING">Pendente</SelectItem>
							<SelectItem value="COMPLETED">Concluído</SelectItem>
							<SelectItem value="CANCELED">Cancelado</SelectItem>
						</SelectContent>
					</Select>

					{/* Armazém de origem */}
					<Select value={originWarehouseId} onValueChange={setOriginWarehouse}>
						<SelectTrigger><SelectValue placeholder="Armazém de origem" /></SelectTrigger>
						<SelectContent>
							{warehouses.map(w => (
								<SelectItem key={w.id} value={w.id}>{w.name}</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* destinationwarehouse */}
					<Select value={destinationWarehouseId} onValueChange={setDestWarehouse}>
						<SelectTrigger><SelectValue placeholder="Armazém de destino" />
						</SelectTrigger>
						<SelectContent>
							{warehouses.map(w => (
								<SelectItem key={w.id} value={w.id}>
									{w.name}
									</SelectItem>
							))}
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

export default MovementFilterDialog