"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Boxes, DollarSign, Layers3, Loader2, PackageSearch, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import AlertDialogDelete from "../../shared/alert-dialog-delete-product"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	sku: z.string().min(1, "SKU é obrigatório."),
	supplier: z.string().min(1, "Fornecedor obrigatório."),
	quantity: z.coerce.number().min(0),
	price: z.coerce.number().min(0),
	category: z.string().min(1, "Categoria é obrigatória."),
	minimumStock: z.coerce.number().min(0, "Estoque mínimo deve ser zero ou mais.").optional()
})

type FormValues = z.infer<typeof formSchema>

interface EditProductModalProps {
	productId: string
}

const EditProductModal = ({ productId }: EditProductModalProps) => {

	const queryClient = useQueryClient()

	const router = useRouter()
	const [advancedEdit, setAdvancedEdit] = useState(false)

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			sku: '',
			supplier: '',
			quantity: 0,
			price: 0,
			category: '',
			minimumStock: 0
		}
	})

	const { data: products, isLoading } = useQuery({
		queryKey: ["products", productId],
		queryFn: async () => {
			const response = await api.get(`/product/${productId}`)

			const product = response.data

			form.reset({
				name: product.name,
				sku: product.sku,
				supplier: product.supplierId,
				quantity: product.quantity,
				price: product.price,
				category: product.category.id,
				minimumStock: product.minimumStock ?? 0
			})

			return response.data
		}
	})

	const { data: categories = [] } = useQuery({
		queryKey: ["categories",],
		queryFn: async () => {
			const response = await api.get("/categories")
			return response.data.categories
		}
	})

	const { data: suppliers = [], isLoading: supplierLoading } = useQuery({
		queryKey: ["suppliers"],
		queryFn: async () => {
			const response = await api.get("/supplier")
			return response.data.suppliers
		}
	})

	const updateProduct = useMutation({
		mutationFn: async (data: FormValues) => {
			await api.patch(`/product/${productId}`, data)
		},
		onSuccess: () => {
			toast.success('Produto atualizado com sucesso!')
			queryClient.invalidateQueries({ queryKey: ['products'] })

		},
		onError: () => {
			toast.error('Erro ao atualizar produto.')
		}
	})

	const deleteProduct = useMutation({
		mutationFn: async () => {
			await api.delete(`/product/${productId}`)
		},
		onSuccess: () => {
			toast.success('Produto deletado com sucesso.')
			queryClient.invalidateQueries({ queryKey: ['products'] })
			router.refresh()
		},
		onError: (error) => {
			toast.error('Erro ao deletar produto.')
			console.error(error)
		},
	})

	const onSubmit = (data: FormValues) => {
		updateProduct.mutate(data)
	}

	const onDelete = () => {
		deleteProduct.mutate()
	}

	if (isLoading) {
		return (
			<div className="w-full h-full">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<Dialog >
				<DialogTrigger className="p-0 m-0 cursor-pointer">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent >
					<DialogHeader className="flex justify-start items-center gap-3">

						<DialogTitle>Detalhes do Produto</DialogTitle>
					</DialogHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

							<div className="flex flex-col md:flex-row justify-between items-start gap-4 md:items-center">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="w-full md:w-2/3">
											<FormLabel className="flex items-center gap-2 text-base font-medium">
												<PackageSearch className="w-4 h-4 text-muted-foreground" /> Nome
											</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Nome do produto" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="flex bg-card/20 p-2 items-center justify-center gap-2 rounded-sm">
									<Label htmlFor="advanced-edit" className="text-xs text-muted-foreground">Edição Avançada</Label>
									<Switch
										id="advanced-edit"
										checked={advancedEdit}
										onCheckedChange={setAdvancedEdit}
									/>
								</div>
							</div>


							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<DollarSign className="w-4 h-4 text-muted-foreground" /> Preço
											</FormLabel>
											<FormControl>
												<Input type="number" step="0.01" {...field} placeholder="0.00" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="quantity"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<Boxes className="w-4 h-4 text-muted-foreground" /> Quantidade
											</FormLabel>
											<FormControl>
												<Input type="number" {...field} placeholder="0" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>


							{advancedEdit && (
								<div className="flex gap-2 flex-col">
									<FormField
										control={form.control}
										name="sku"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="flex items-center gap-2">
													<Boxes className="w-4 h-4 text-muted-foreground" /> SKU:
												</FormLabel>
												<FormControl>
													<Input type="text" {...field} placeholder="SKU" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex items-center justify-between p-2">
										<FormField
											control={form.control}
											name="supplier"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Fornecedor</FormLabel>
													<Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Selecione o fornecedor" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{suppliers.map((s: { id: string, name: string }) => (
																<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
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
													<Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Selecione uma categoria" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{categories.map((c: { id: string, name: string }) => (
																<SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="minimumStock"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="flex items-center gap-2">
													<Layers3 className="w-4 h-4 text-muted-foreground" /> Estoque Mínimo
												</FormLabel>
												<FormControl>
													<Input type="number" min={0} inputMode="numeric" placeholder="Valor mínimo para alerta" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

								</div>

							)}

							<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-6">
								<AlertDialogDelete type="Produto" onDelete={onDelete} />
								<Button type="submit" className="w-full md:w-1/3">
									Salvar Alterações
								</Button>
							</div>
						</form>
					</Form>

				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditProductModal