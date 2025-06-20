"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { Product } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	productId: z.string().min(1, "Produto obrigatório"),
	supplierId: z.string().min(1, "Fornecedor obrigatório"),
	quantity: z.coerce.number().int().positive("Quantidade inválida"),
	expectedAt: z.date({ required_error: "Data obrigatória" })
})

type FormValues = z.infer<typeof formSchema>


const CreateDeliveryForm = () => {
	const [open, setOpen] = useState(false)
	
	const router = useRouter()


	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			quantity: 1,
			expectedAt: new Date()
		}
	})

	const { data: products = [] } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const response = await api.get("/product")
			return response.data
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
		try {
			await api.post("/delivery", data)
			toast.success("Entraga criada com sucesso.")
			form.reset()
			setOpen(false)
			router.refresh()
			
		} catch (error) {
			toast.error("Erro ao criar entrega")
			console.log(error)
		}
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


							<DialogFooter className="flex mt-4">
								<Button type="submit" className="w-full cursor-pointer p-2">
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