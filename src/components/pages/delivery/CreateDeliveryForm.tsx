"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm, useFormContext } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const formSchema = z.object({
	productId: z.string().min(1, "Produto obrigatório"),
	supplierId: z.string().min(1, "Fornecedor obrigatório"),
	quantity: z.coerce.number().int().positive("Quantidade inválida"),
	expectedAt: z.date({ required_error: "Data obrigatória" })
})

interface Product {
	id: string
	name: string
	sku: string
	quantity: string
	price: number
	category?: {
		id: string
		name: string
		createdAt: string
		updatedAt: string
	}
	createdAt: string
	updatedAt: string
	supplier: {
		id: string
		name: string
	}
}
interface Supplier {
	id: string,
	name: string
	email: string
	contactPhone: string
	deliveryTime: string
	description?: string
}

type FormValues = z.infer<typeof formSchema>


const CreateDeliveryForm = () => {
	const [open, setOpen] = useState(false)
	const [products, setProducts] = useState<Product[]>([])
	const [suppliers, setSuppliers] = useState<Supplier[]>([])


	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			quantity: 1,
			expectedAt: new Date()
		}
	})

	useEffect(() => {
		if (open) {
			Promise.all([api.get("/product"), api.get("/supplier")])
				.then(([productsRes, suppliersRes]) => {
					setProducts(productsRes.data)
					setSuppliers(suppliersRes.data.suppliers)
				})
				.catch(() => toast.error("Erro ao carregar produtos ou fornecedores."))
		}
	}, [open])


	const onSubmit = async (data: FormValues) => {
		try {
			await api.post("/delivery", data)
			toast.success("Entraga criada com sucesso.")
			form.reset()
			setOpen(false)
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
									<FormItem className="w-full mt-4">
										<FormLabel>Produto</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione um produto" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{products.map((p) => (
													<SelectItem key={p.id} value={p.id}>
														{p.name}
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
									<FormItem className="w-full mt-4">
										<FormLabel>Fornecedor</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione um fornecedor" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{suppliers.map((s) => (
													<SelectItem key={s.id} value={s.id}>
														{s.name}
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