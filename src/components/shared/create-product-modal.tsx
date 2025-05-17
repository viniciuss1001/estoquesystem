"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { Loader2, Plus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select"
import { SelectItem } from "@radix-ui/react-select"

const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	sku: z.string().min(1, "SKU é obrigatório."),
	quantity: z.coerce.number().min(0),
	price: z.coerce.number().min(0),
	category: z.string().min(1, "Categoria é obrigatória.")
})

const CreateProductModal = () => {
	const [open, setOpen] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			sku: '',
			quantity: 0,
			price: 0,
			category: ''
		}
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await axios.post("/api/product", data)
			toast.success("Produto criado com sucesso!")

			form.reset()
			setOpen(false)

		} catch (error) {
			toast.error("Erro ao criar produto.")
		}
	}

	const categorys = ['Alimento', 'Recepção', "Limpeza", "Suítes", "Escritório"]

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus />
					Criar Produto
				</Button>
			</DialogTrigger>
			<DialogContent>
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
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Categoria</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className="cursor-pointer">
												<SelectValue placeholder="Selecione a categoria" />
											</SelectTrigger>
										</FormControl>
										<SelectContent >
											{categorys.map((cat) => (
												<SelectItem key={cat} value={cat}
												className="flex items-center justify-start p-2 cursor-pointer"
												>
													{cat}
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
								{form.formState.isSubmitting ? <Loader2 className="animate-spin"/> : 'Salvar'}
							</Button>
						</DialogFooter>
					</form>
				</Form>

			</DialogContent>
		</Dialog>
	)
}

export default CreateProductModal