"use client"

import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
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
	originWarehouseId: z.string().optional(),
	destinationWarehouseId: z.string().optional(),
	notes: z.string().optional(),
	status: z.enum(["PENDING", "COMPLETED", "CANCELED"])
})

type FormValues = z.infer<typeof formSchema>

interface EditTransferMovementModalProps {
	movementId: string
}

interface Warehouse {
	id: string
	name: string
}

const EditTransferMovementModal = ({ movementId }: EditTransferMovementModalProps) => {
	const router = useRouter()
	const [loading, setLoading] = useState(true)
	const [warehouses, setWarehouses] = useState<Warehouse[]>([])

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			type: "IN",
			quantity: 1,
			originWarehouseId: "",
			destinationWarehouseId: "",
			status: "PENDING",
			notes: ""
		},
	})



	const { handleSubmit, control, reset } = form

	const watchType = form.watch("type")


	useEffect(() => {
		const fetchData = async () => {
			try {
				const [movementRes, warehousesRes] = await Promise.all([
					api.get(`/movements/${movementId}`),
					api.get(`/warehouse`),
				])
				console.log(warehousesRes.data)
				const movement = movementRes.data
				if (movement.type !== "TRANSFER") {
					toast.error("Essa movimentação não é do tipo transferência.")
					return
				}

				setWarehouses(warehousesRes.data)
				reset({
					type: movement.type,
					quantity: movement.quantity,
					originWarehouseId: movement.originWarehouseId,
					destinationWarehouseId: movement.destinationWarehouseId,
					status: movement.status,
					notes: movement.notes

				})
			} catch {
				toast.error("Erro ao carregar dados.")
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [movementId, reset])

	const onSubmit = async (data: FormValues) => {
		try {
			setLoading(true)
			await api.patch(`/movements/${movementId}`, {
				...data,
				type: "TRANSFER",
			})
			toast.success("Transferência atualizada com sucesso.")
			router.refresh()
		} catch {
			toast.error("Erro ao atualizar transferência.")
		} finally {
			setLoading(false)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await api.delete(`/movements/${movementId}`)
			toast.success("Transferência deletada com sucesso.")
			router.push("/movements")
			router.refresh()
		} catch {
			toast.error("Erro ao deletar transferência.")
		} finally {
			setLoading(false)
		}
	}

	if (loading) {
		return (
			<div className="flex justify-center items-center p-6">
				<Loader2 className="animate-spin size-5" />
			</div>
		)
	}

	return (
		<div className="p-4">
			<Dialog>
				<DialogTrigger className="p-0 m-0 cursor-pointer">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Editar Transferência</DialogTitle>
					</DialogHeader>

					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
						

							{watchType === "TRANSFER" && (
							<>
								<FormField
									control={form.control}
									name="originWarehouseId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Origem</FormLabel>
											<Select onValueChange={field.onChange} value={field.value} >
												<FormControl className="w-full">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Selecione o Armazém de Origem" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{warehouses.map(warehouse => (
														<SelectItem key={warehouse.id} value={warehouse.id}>
															{warehouse.name}
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
									name="destinationWarehouseId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Destino</FormLabel>
											<Select onValueChange={field.onChange} value={field.value} >
												<FormControl className="w-full">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Selecione o Armazém de Destino" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{warehouses.map(warehouse => (
														<SelectItem key={warehouse.id} value={warehouse.id}>
															{warehouse.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}

							<FormField
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="PENDING">Pendente</SelectItem>
												<SelectItem value="COMPLETED">Concluída</SelectItem>
												<SelectItem value="CANCELED">Cancelada</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

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

							<div className="flex items-center justify-between gap-2 pt-2">
								<AlertDialogDelete
									type="Transferência"
									onDelete={onDelete}
								/>
								<Button type="submit" disabled={loading} className="w-1/2">
									{loading ? <Loader2 className="animate-spin size-4" /> : "Salvar"}
								</Button>
							</div>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditTransferMovementModal
