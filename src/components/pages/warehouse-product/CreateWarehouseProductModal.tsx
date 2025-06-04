"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "@radix-ui/react-select"
import { Loader2, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	productId: z.string().nonempty("Produto obrigatório"),
	warehouseId: z.string().nonempty("Armazém obrigatório"),
	quantity: z.coerce.number().int().positive("Quantidade deve ser positiva"),
})

type FormData = z.infer<typeof formSchema>

interface Props {
	onCreated: () => void
}

interface Product {
	id: string
	name: string
}

interface Warehouse {
	id: string
	name: string
}


const CreateWarehouseProductModal = ({ onCreated }: Props) => {

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState<Product[]>([])
	const [warehouses, setWarehouses] = useState<Warehouse[]>([])

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			productId: "",
			warehouseId: "",
			quantity: 1
		}
	})

	const fetchOptions = async () => {
		try {
			const [productsRes, warehousesRes] = await Promise.all([
				api.get("/product"),
				api.get("/warehouse"),
			])

			setProducts(productsRes.data)

			setWarehouses(warehousesRes.data)
			setLoading(false)

		} catch (error) {
			toast.error("Erro ao carregar produtos ou armazéns")
			setLoading(false)
		}
	}

	const onSubmit = async (data: FormData) => {
		try {
			console.log("dados enviados:", data)
			await api.post("/warehouse-product", data)
			toast.success("Produto vinculado ao armazém com sucesso.")
			form.reset()
			setOpen(false)
			onCreated()


		} catch (error) {
			toast.error("Erro ao criar relação produto/armazém")
			setLoading(false)
		}
	}

	useEffect(() => {
		if (open) fetchOptions()
	}, [open])

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='ghost' className="w-full cursor-pointer">
						<Plus className="size-4" />
						Criar novo Produto por Armazém
					</Button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							Adicionar Produto ao Armazém
						</DialogTitle>
					</DialogHeader>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="productId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Produto</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o produto" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{products.map((product) => (
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
								name="warehouseId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Armazém</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o armazém" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{warehouses.map((w) => (
													<SelectItem key={w.id} value={w.id}>
														{w.name}
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
									<FormItem>
										<FormLabel>Quantidade</FormLabel>
										<FormControl>
											<Input type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							

							<DialogFooter>
								<Button type="submit" disabled={loading}>
									{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar"}
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default CreateWarehouseProductModal
