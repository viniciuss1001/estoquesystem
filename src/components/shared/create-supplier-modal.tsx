"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Loader2, UserPlus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	email: z.string().email().min(1, "Email é obrigatório."),
	contactPhone: z.string().min(8, "O telefone é obrigatório."),
	deliveryTime: z.string().min(1, "Informe o prazo de entraga."),
	description: z.string().optional(),
	productId: z.string().min(1, "Selecione um produto")
})

const CreateSupplierModal = () => {
	const [open, setOpen] = useState(false)
	const [products, setProducts] = useState<{ id: string; name: string }[]>([])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			contactPhone: '',
			deliveryTime: '',
			description: '',
			productId: '',
		}
	})

	//load products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("/api/product")
				setProducts(response.data)

			} catch (error) {
				console.log(error)
				toast.error("Erro ao buscar os produtos no banco.")
			}
		}

		fetchProducts()
	}, [])

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await axios.post("/api/supplier", data)
			toast.success("Fonecedor criado com sucesso!")

		} catch (error) {
			toast.error("Erro ao criar fornecedor.")

		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<UserPlus />
					Criar Fornecedor
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cadastro de Fornecedor</DialogTitle>
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl><Input type="email" {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="contactPhone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefone</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="deliveryTime"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Prazo de entrega</FormLabel>
									<FormControl><Input {...field} placeholder="Ex: 5 dias úteis" /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descrição</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="productId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Produto Comercializado</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className="cursor-pointer">
												<SelectValue placeholder="Selecione um produto" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{products.map((product) => (
												<SelectItem key={product.id} value={product.id}
												className="flex items-center justify-start p-2 cursor-pointer"
												>
													{product.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button type="submit" disabled={form.formState.isSubmitting} className="w-full flex justify-center p-3 cursor-pointer">
								{form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : 'Salvar'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateSupplierModal