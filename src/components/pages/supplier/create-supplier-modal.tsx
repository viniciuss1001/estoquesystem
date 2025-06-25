"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


interface Product {
	id: string
	name: string
}

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
	const router = useRouter()
	const queryClient = useQueryClient()

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

	//load products
	const { data: products = [], isLoading: isLoadingProducts } = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const response = await api.get('/product')
			return response.data as Product[]
		}
	})

	const createSupplier = useMutation({
		mutationFn: async (data: z.infer<typeof formSchema>) => {
			await api.post('/supplier', data)
		},
		onSuccess: () => {
			toast.success('Fornecedor criado com sucesso!')
			router.refresh()
			form.reset()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['suppliers'] }) 
		},
		onError: () => {
			toast.error('Erro ao criar fornecedor.')
		},
	})

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		createSupplier.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus className="size-4" />
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
						<DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
							<DialogClose className="cursor-pointer p-2 hover:bg-card transition rounded-sm w-1/4">
								Cancelar
							</DialogClose>
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