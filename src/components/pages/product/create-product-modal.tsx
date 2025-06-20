"use client"

import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	sku: z.string().min(1, "SKU é obrigatório."),
	supplier: z.string().min(1, "Fornecedor obrigatório."),
	quantity: z.coerce.number().min(0),
	price: z.coerce.number().min(0),
	category: z.string().min(1, "Categoria é obrigatória."),
	warehouse: z.string().min(1, "Armazém é obrigatório."),
	usageStatus: z.enum(["IN_STOCK", "IN_USE", "CONSUMED"], {
		required_error: "Estado de uso obrigatório.",
	}),
	expirationDate: z.date().optional()
})


const CreateProductModal = () => {

	const [open, setOpen] = useState(false)

	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			sku: '',
			supplier: '',
			quantity: 0,
			price: 0,
			category: '',
			warehouse: '',
			usageStatus: "IN_STOCK",
			expirationDate: new Date()
		}
	})

	const categoryWatch = form.watch("category")

	const statusOptions = [
		{ value: "IN_STOCK", label: "Em estoque" },
		{ value: "IN_USE", label: "Em uso" },
		{ value: "CONSUMED", label: "Consumido" }
	]

	const { data: categories = [], isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const response = await api.get("/categories")
			return response.data
		}
	})

	const { data: suppliers = [], isLoading: supplierLoading } = useQuery({
		queryKey: ["suppliers"],
		queryFn: async () => {
			const response = await api.get("/supplier")
			return response.data.suppliers
		}
	})

	const { data: warehouses = [] } = useQuery({
		queryKey: ["warehouses"],
		queryFn: async () => {
			const response = await api.get("/warehouse")
			return response.data
		}
	})

	const createProduct = useMutation({
		mutationFn: async (data: z.infer<typeof formSchema>) => {
			await api.post('/product', data)
		},
		onSuccess: () => {
			toast.success("Produto criado com sucesso"),
				form.reset()
			router.refresh()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
		onError: (error) => {
			toast.error("Erro ao criar produto")
			console.log(error)
		}
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		createProduct.mutate(data)

	}

	return (
		<Dialog open={open} onOpenChange={setOpen} >
			<DialogTrigger asChild>
				<Button variant='default' className='flex cursor-pointer items-center mb-auto'>
					<Plus />
					Criar Produto
				</Button>
			</DialogTrigger>
			<DialogContent forceMount>
				<DialogHeader>
					<DialogTitle>
						Adicionar novo Produto
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="sku"
							render={({ field }) => (
								<FormItem>
									<FormLabel>SKU</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>


						<div className="w-auto p-3 flex flex-wrap gap-4 items-center justify-between">

							<FormField
								control={form.control}
								name="supplier"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fornecedor</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											disabled={isLoading}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o Fornecedor:" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{suppliers.map((supplier: { id: string, name: string }) => (
													<SelectItem key={supplier.id} value={supplier.id}>
														{supplier.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Categoria</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											disabled={isLoading}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione uma categoria" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{categories.map((cat: { id: string; name: string }) => (
													<SelectItem key={cat.id} value={cat.name}>
														{cat.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{categoryWatch === "Perecível" && (
								<FormField
									control={form.control}
									name="expirationDate"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Data de validade</FormLabel>
											<input type="date" placeholder="Selecionar data" />
											<FormMessage />
										</FormItem>
									)}
								/>
							)}

							<FormField
								name="usageStatus"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status de uso</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{statusOptions.map((opt) => (
													<SelectItem key={opt.value} value={opt.value}>
														{opt.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="warehouse"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Armazém</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											disabled={isLoading}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o Armazém:" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{warehouses.map((warehouse: { id: string, name: string }) => (
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
						</div>

						<div className="w-auto p-3 flex flex-wrap gap-4 items-center justify-between">

							<FormField
								control={form.control}
								name="quantity"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Quantidade</FormLabel>
										<FormControl><Input type="number" {...field} /></FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="price"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Preço</FormLabel>
										<FormControl><Input type="number" step="0.01" {...field} /></FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<DialogClose className="cursor-pointer p-2 hover:bg-card rounded-sm w-1/3 transition">
								Cancelar
							</DialogClose>
							<Button type="submit" disabled={form.formState.isSubmitting} className="w-2/3 flex justify-center p-3 cursor-pointer hover:bg-blue-400">
								{form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : 'Salvar'}
							</Button>
						</DialogFooter>
					</form>
				</Form>

			</DialogContent>
		</Dialog>
	)
}

export default CreateProductModal