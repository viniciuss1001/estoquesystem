"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2, Plus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"


const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	email: z.string().email().min(1, "Email é obrigatório."),
	contactPhone: z.string().min(8, "O telefone é obrigatório."),
	deliveryTime: z.coerce.date(),
	description: z.string().optional(),
	products: z.array(z.string()).min(1, "Selecione pelo menos um produto"),
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
			deliveryTime: new Date(),
			description: '',
			products: [],
		}
	})

	const router = useRouter()

	//load products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await api.get("/product")
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
			await api.post("/supplier", data)
			toast.success("Fonecedor criado com sucesso!")
			router.refresh()
			form.reset()
			
			setOpen(false)
		} catch (error) {
			toast.error("Erro ao criar fornecedor.")
			console.log(error)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus className="size-4"/>
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
							render={({ field }) => {
								
								const formattedDate = field.value ? field.value.toISOString().substring(0, 10) : "";

								return (
									<FormItem>
										<FormLabel>Prazo de entrega</FormLabel>
										<FormControl>
											<Input
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
							name="products"
							render={() => (
								<FormItem>
									<FormLabel>Produtos Comercializados</FormLabel>
									<div className="grid gap-2">
										{products.map((product) => (
											<FormField
												key={product.id}
												control={form.control}
												name="products"
												render={({ field }) => {
													return (
														<FormItem
															key={product.id}
															className="flex flex-row items-start space-x-2 space-y-0"
														>
															<FormControl>
																<Checkbox
																	checked={field.value?.includes(product.id)}
																	onCheckedChange={(checked) => {
																		if (checked) {
																			field.onChange([...field.value, product.id])
																		} else {
																			field.onChange(field.value?.filter((id: string) => id !== product.id))
																		}
																	}}
																/>
															</FormControl>
															<FormLabel className="font-normal">{product.name}</FormLabel>
														</FormItem>
													)
												}}
											/>
										))}
									</div>
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