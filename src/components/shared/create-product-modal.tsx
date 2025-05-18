"use client"

import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	sku: z.string().min(1, "SKU é obrigatório."),
	quantity: z.coerce.number().min(0),
	price: z.coerce.number().min(0),
	category: z.string().min(1, "Categoria é obrigatória.")
})

const CreateProductModal = () => {

	const [open, setOpen] = useState(false)

	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			sku: '',
			quantity: 0,
			price: 0,
			category: ""
		}
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await api.post("/product", data)
			toast.success("Produto criado com sucesso!")
			router.refresh()

			form.reset()
			setOpen(false)

		} catch (error) {
			toast.error("Erro ao criar produto.")
			console.log(error)
		}
	}

	const categorys = ['Alimento', 'Recepção', "Limpeza", "Suítes", "Escritório"]



	return (
		<Dialog open={open} onOpenChange={setOpen} >
			<DialogTrigger asChild>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus />
					Criar Produto
				</Button>
			</DialogTrigger>
			<DialogContent forceMount>
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
									<select
										{...field}
										className="w-full border border-gray-300 rounded-md p-2"
									>
										<option value="" className="bg-background">Selecione uma categoria</option>
										{categorys.map((cat) => (
											<option key={cat} value={cat} className="bg-background">
												{cat}
											</option>
										))}
									</select>
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

export default CreateProductModal