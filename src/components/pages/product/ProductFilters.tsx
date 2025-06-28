"use client"

import Combobox from "@/components/shared/Combobox"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useTransition } from "react"


const ProductFilters = () => {

	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const { data: categories = [], isLoading: categoriesLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const response = await api.get("/categories");
			return response.data
		},
	})

	const { data: suppliers = [], isLoading: supplierLoading } = useQuery({
		queryKey: ['suppliers'],
		queryFn: async () => {
			const response = await api.get('/supplier')
			return response.data.suppliers
		}
	})

	const { data: warehouses = [], isLoading: warehouseLoading } = useQuery({
		queryKey: ["warehouses"],
		queryFn: async () => {
			const response = await api.get("/warehouse")
			return response.data
		}
	})

	function updateParam(key: string, value: string | undefined) {
		const params = new URLSearchParams(searchParams.toString())

		if (value) {
			params.set(key, value)
		} else {
			params.delete(key)
		}

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

					{/* Categoria */}
					<Combobox
						items={categories}
						placeholder="Categoria"
						onChange={(value) => updateParam("categoryId", value)}
						selectedId={searchParams.get("categoryId") || ""}
					/>

					{/* Fornecedor */}
					<Combobox
						items={suppliers}
						placeholder="Fornecedor"
						onChange={(value) => updateParam("supplierId", value)}
						selectedId={searchParams.get("supplierId") || ""}
					/>

					{/* Status */}
					<Select
						onValueChange={(value) => updateParam("usageStatus", value)}
						defaultValue={searchParams.get("usageStatus") || ""}
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

					{/* Armazém */}
					<Combobox
						items={warehouses}
						placeholder="Armazém"
						onChange={(value) => updateParam("warehouseId", value)}
						selectedId={searchParams.get("warehouseId") || ""}
					/>
				</div>

				<DialogFooter>
					<Button
						variant="ghost"
						className="self-end text-sm text-red-500"
						onClick={() => {
							startTransition(() => router.push(window.location.pathname))
						}}
					>
						Limpar filtros
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>

	)
}

export default ProductFilters