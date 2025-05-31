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


const formSchema = z.object({
	name: z.string().min(1, "Nome obrigatório."),
	price: z.coerce.number().nonnegative("Preço inválido"),
	quantity: z.coerce.number().int().nonnegative("Quantidade inválida"),
	category: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface EditProductModalProps {
	productId: string
}

const EditProductModal = ({ productId }: EditProductModalProps) => {

	const router = useRouter()
	const [loading, setLoading] = useState(true)

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			price: 0,
			quantity: 0,
			category: ""
		}
	})

	useEffect(() => {
		api.get(`/product/${productId}`)
			.then((response) => {
				const product = response.data
				form.reset({
					name: product.name,
					price: product.price,
					quantity: product.quantity,
					category: product.category?.id ?? "",
				})
			})
			.catch((err) => {
				toast.error("Erro ao buscar produto.")
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [productId])

	const { data: categories = [], isLoading } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const response = await api.get("/categories")
			return response.data
		}
	})

	const onSubmit = async (data: FormValues) => {
		try {
			await api.patch(`/product/${productId}`, data)
			toast.success("Produto atualizado com sucesso!")

		} catch (error) {
			toast.error("Erro ao atualizar produto.")
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await api.delete(`/product/${productId}`)
			setLoading(false)

			toast.success("Produto deletado com sucesso.")
			router.refresh()

		} catch (error) {
			toast.error("Erro ao deletar produto.")
			setLoading(false)
			console.log(error)
		}

	}

	if (loading) {
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
													<SelectItem key={cat.id} value={cat.id}>
														{cat.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="flex items-center justify-between pt-4 gap-2">
								<AlertDialogDelete
									type="Produto"
									onDelete={onDelete}
								/>
								<Button type="submit" className="cursor-pointer flex rounded-sm w-2/4">
									{loading ? <Loader2 className="animate-spin" /> : 'Salvar'}
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