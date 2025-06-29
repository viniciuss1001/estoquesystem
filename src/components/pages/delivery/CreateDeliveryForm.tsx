"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { useProducts, useSupplierInvoices, useWarehouses } from "@/lib/queries"
import { Product } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	productId: z.string().min(1, "Produto obrigatório"),
	supplierId: z.string().min(1, "Fornecedor obrigatório"),
	warehouseId: z.string().min(1, "Armazém obrigatório"),
	supplierInvoiceId: z.string().optional(),
	quantity: z.coerce.number().int().positive("Quantidade inválida"),
	expectedAt: z.date({ required_error: "Data obrigatória" })
})

type FormValues = z.infer<typeof formSchema>


const CreateDeliveryForm = () => {
	const [open, setOpen] = useState(false)

	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			quantity: 1,
			expectedAt: new Date(),
			warehouseId: "",
			supplierInvoiceId: ""
		}
	})

	const { data: products = [] } = useProducts()

	const { data: warehouses = [] } = useWarehouses()

	const { data: invoices = [] } = useSupplierInvoices()

	const createDelivery = useMutation({
		mutationFn: async (data: FormValues) => {
			await api.post("/delivery", data)
		},
		onSuccess: () => {
			toast.success('Movimentação registrada com sucesso.')
			router.refresh()
			form.reset()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['deliveries'] })
		},
		onError: () => {
			toast.error("Erro ao registrar entrega")
		}
	})

	const watchProductId = form.watch("productId")
	const selectedProduct = products.find((p: Product) => p.id === watchProductId)

	useEffect(() => {
		if (selectedProduct?.supplier?.id) {
			form.setValue("supplierId", selectedProduct.supplier.id)
		} else {
			form.setValue("supplierId", "")
		}
	}, [watchProductId])

	const onSubmit = async (data: FormValues) => {
		createDelivery.mutate(data)
	}

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button className="size-full cursor-pointer"
						variant='ghost'
					>
						<Plus className="size-4" />
						Criar Entrega
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>
						Criar nova Entrega
					</DialogTitle>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y4">

							{/* product */}
							<FormField
								control={form.control}
								name="productId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Produto</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o Produto" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{products.map((product: Product) => (
													<SelectItem key={product.id} value={product.id}>
														{product.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* supplier */}
							<FormField
								control={form.control}
								name="supplierId"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Fornecedor</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											disabled={true}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Fornecedor" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{selectedProduct?.supplier && (
													<SelectItem value={selectedProduct.supplier.id}>
														{selectedProduct.supplier.name}
													</SelectItem>
												)}
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							{/* warehouse */}
							<FormField
								control={form.control}
								name="warehouseId"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Armazém de destino</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o armazém" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{warehouses.map((warehouse) => (
													<SelectItem key={warehouse.id} value={warehouse.id}>
														{warehouse.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* supplierInvoice */}
							<FormField
								control={form.control}
								name="supplierInvoiceId"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Boleto (opcional)</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o boleto ou deixe em branco" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{invoices.map((invoice) => (
													<SelectItem key={invoice.id} value={invoice.id}>
														{invoice.title}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* quantity */}
							<FormField
								control={form.control}
								name="quantity"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Quantidade</FormLabel>
										<FormControl>
											<Input type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* expectedAt */}
							<FormField
								control={form.control}
								name="expectedAt"
								render={({ field }) => {
									const formattedDate = field.value ? field.value.toISOString().substring(0, 10) : "";

									return (
										<FormItem className="mt-4">
											<FormLabel>Prazo de entrega</FormLabel>
											<FormControl>
												<Input
													className="w-full flex gap-4"
													type="date"
													value={formattedDate}
													onChange={(e) => {
														const date = e.target.value ? new Date(e.target.value) : null;
														field.onChange(date);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>


							<DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
								<DialogClose className="cursor-pointer p-2 hover:bg-zinc-500/20 transition rounded-sm w-1/4">
									Cancelar
								</DialogClose>
								<Button type="submit" className="w-2/3 cursor-pointer p-2">
									Criar entrega
								</Button>
							</DialogFooter>


						</form>
					</Form>


				</DialogContent>
			</Dialog>
		</div>
	)
}

export default CreateDeliveryForm