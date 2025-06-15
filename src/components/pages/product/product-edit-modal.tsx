"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import AlertDialogDelete from "../../shared/alert-dialog-delete-product"
import { useQuery } from "@tanstack/react-query"
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
})

type FormValues = z.infer<typeof formSchema>

interface EditProductModalProps {
	productId: string
}

const EditProductModal = ({ productId }: EditProductModalProps) => {

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
				category: product.category.name,
			})

			return response.data
		}
	})

	const { data: categories = [] } = useQuery({
		queryKey: ["categories", ],
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


	const onSubmit = async (data: FormValues) => {
		try {
			await api.patch(`/product/${productId}`, data)
			console.log("enviou")
			toast.success("Produto atualizado com sucesso!")

		} catch (error) {
			toast.error("Erro ao atualizar produto.")
		}
	}

	const onDelete = async () => {
		try {
			await api.delete(`/product/${productId}`)

			toast.success("Produto deletado com sucesso.")
			router.refresh()

		} catch (error) {
			toast.error("Erro ao deletar produto.")

			console.log(error)
		}

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
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<div className="w-full p-1 flex flex-wrap items-center justify-between">
								<div className="flex w-1/2">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Nome</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="flex w-1/2 border rounded-md p-2 h-full mt-auto gap-3 items-center justify-between">

									<Label htmlFor="advanced-edit"
										className="text-sm"
									>
										Edição Avançada
									</Label>
									<Switch
										id="advanced-edit"
										checked={advancedEdit}
										onCheckedChange={setAdvancedEdit}
									/>

								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Preço</FormLabel>
											<FormControl>
												<Input type="number" {...field} />
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
											<FormLabel>Quantidade</FormLabel>
											<FormControl>
												<Input type="number" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{advancedEdit && (
								<>
									<div className="w-auto p-3 flex flex-wrap gap-4 items-center">

										<FormField
											control={form.control}
											name="supplier"
											render={({ field }) => (
												<FormItem className="w-1/2 ">
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
														<SelectContent className="flex">
															{suppliers.map((supplier: { id: string, name: string }) => (
																<SelectItem key={supplier.id} value={supplier.id} className="flex w-full">
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
												<FormItem >
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
										
									</div>

									<div className="w-auto p-2 flex  gap-4 items-center justify-between ">

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
								</>
							)}


							<div className="flex items-center justify-between pt-4 gap-2">
								<AlertDialogDelete
									type="Produto"
									onDelete={onDelete}
								/>
								<Button type="submit" className="cursor-pointer flex rounded-sm w-2/4">
									Salvar
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