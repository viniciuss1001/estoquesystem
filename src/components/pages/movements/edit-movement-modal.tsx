"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	type: z.enum(["IN", "OUT", "TRANSFER"], {
		required_error: "Tipo de movimentação é obrigatório.",
	}),
	quantity: z.coerce.number().min(1, "Quantidade deve ser maior que 0."),
	notes: z.string().optional(),
	origin: z.string().optional(),
	destination: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface EditMovementModalProps {
	movementId: string
}

const EditMovementModal = ({ movementId }: EditMovementModalProps) => {

	const router = useRouter()
	const [loading, setLoading] = useState(true)


	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			type: "IN",
			quantity: 0,
			notes: "",
			origin: "",
			destination: ""
		}
	})
	const { handleSubmit, control, watch } = form
	const type = watch("type")

	useEffect(() => {
		api.get(`/movements/${movementId}`)
			.then((response) => {
				const movement = response.data
				form.reset({
					type: movement.type,
					quantity: movement.quantity,
					origin: movement.origin,
					destination: movement.destination,
					notes: movement.notes
				})

			})
			.catch(() => {
				toast.error("Erro ao buscar movimentação.")
			})
			.finally(() => {
				setLoading(false)
			})

	}, [])

	const onSubmit = async (data: FormValues) => {
		try {
			await api.patch(`/movements/${movementId}`, data)
			toast.success("Movimentação atualizada com sucesso.")
		} catch (error) {
			toast.error("Erro ao atualizar movimentação.")
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await api.delete(`/movements/${movementId}`)
			setLoading(false)

			toast.success("Movimentação deletada com sucesso.")
			router.refresh()

		} catch (error) {
			toast.error("Erro ao deletar movimentação.")
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
			<Dialog>
				<DialogTrigger className="p-0 m-0 cursor-pointer">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent >
					<DialogHeader className="flex justify-start items-center gap-3">
						<DialogTitle>Detalhes da Movimentação</DialogTitle>
						
					</DialogHeader>


					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={control}
								name="type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tipo</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="IN">Entrada</SelectItem>
												<SelectItem value="OUT">Saída</SelectItem>
												<SelectItem value="TRANSFER">Transferência</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
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

							{type === "TRANSFER" && (
								<>
									<FormField
										control={control}
										name="origin"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Origem</FormLabel>
												<FormControl>
													<Input placeholder="Ex: Estoque Central" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={control}
										name="destination"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Destino</FormLabel>
												<FormControl>
													<Input placeholder="Ex: Loja 1" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							<FormField
								control={control}
								name="notes"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Observações</FormLabel>
										<FormControl>
											<Textarea placeholder="Opcional" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" className="w-full">
								Salvar alterações
							</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditMovementModal