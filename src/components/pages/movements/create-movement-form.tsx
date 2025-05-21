"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const movementSchema = z.object({
	productId: z.string().min(1, "Produto é obrigatório."),
	type: z.enum(["IN", "OUT", "TRANSFER"], {
		required_error: "Tipo de movimentação é obrigatório.",
	}),
	quantity: z.coerce.number().min(1, "Quantidade deve ser maior que 0.").positive(),
	notes: z.string().optional(),
	origin: z.string().optional(),
	destination: z.string().optional(),
}).superRefine((data, ctx) => {
	if (data.type === "TRANSFER") {
		if (!data.origin) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Origem é obrigatória em transferências.",
				path: ["origin"],
			});
		}
		if (!data.destination) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Destino é obrigatório em transferências.",
				path: ["destination"],
			});
		}
	}
})

type MovementFormType = z.infer<typeof movementSchema>

interface Product {
	id: string
	name: string

}

const CreateMovementForm = () => {
	const [open, setOpen] = useState(false)
	const [products, setProducts] = useState<Product[]>([])
	const router = useRouter()

	const form = useForm<MovementFormType>({
		resolver: zodResolver(movementSchema),
		defaultValues: {
			productId: "",
			type: "IN",
			quantity: 1,
			origin: "",
			destination: "",
			notes: "",
		}
	})


	const watchType = form.watch("type")

	useEffect(() => {
		api.get("/product")
			.then(res => setProducts(res.data))
			.catch(() => toast.error("Erro ao carregar os produtos"))
	}, [])

	const onSubmit = async (data: MovementFormType) => {
		try {
			await api.post("/movements", data)
			toast.success("Movimentação registrada com sucesso.")
			router.refresh()
			form.reset()

			setOpen(false)
			
		} catch (error) {
			toast.error("Erro ao registrar movimentação.")
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus />
					Criar Movimentação
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>

						Adicionar nova Movimentação
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="flex gap-2 justify-between">
							<FormField
								control={form.control}
								name="productId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Produto</FormLabel>
										<Select onValueChange={field.onChange} value={field.value} >
											<FormControl className="w-full">
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Selecione o produto" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{products.map(product => (
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

							{/* type */}
							<FormField
								control={form.control}
								name="type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tipo de movimentação</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o tipo" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="IN">Entrada</SelectItem>
												<SelectItem value="OUT">Saída</SelectItem>
												<SelectItem value="TRANSFER">
													Movimentação
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{watchType === "TRANSFER" && (
							<>
								<FormField
									control={form.control}
									name="origin"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Origem</FormLabel>
											<FormControl>
												<Input placeholder="Origem" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="destination"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Destino</FormLabel>
											<FormControl>
												<Input placeholder="Destino" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}

						<FormField
							control={form.control}
							name="quantity"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Quantidade</FormLabel>
									<FormControl>
										<Input type="number" placeholder="Quantidade" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="destination"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Destino (opcional)</FormLabel>
									<FormControl>
										<Input placeholder="Ex: Recepção, Almoxarifado" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Observações</FormLabel>
									<FormControl>
										<Textarea placeholder="Alguma observação?" {...field} />
									</FormControl>
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

export default CreateMovementForm