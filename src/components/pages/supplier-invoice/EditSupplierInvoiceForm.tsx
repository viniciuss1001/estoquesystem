"use client"

import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { EditInvoiceFormData, editInvoiceSchema } from "./formSchema"

interface EditSupplierInvoiceModalProps {
	invoiceId: string
}


const EditSupplierInvoiceForm = ({ invoiceId }: EditSupplierInvoiceModalProps) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<EditInvoiceFormData>({
		resolver: zodResolver(editInvoiceSchema),
		defaultValues: {
			title: "",
			description: "",
			amount: 0,
			dueDate: "",
			status: "PENDING",
		}
	})

	const { data: invoice, isLoading } = useQuery({
		queryKey: ["supplierInvoice", invoiceId],
		queryFn: async () => {
			const response = await api.get(`/supplier-invoice/${invoiceId}`)
			return response.data
		}
	})

	useEffect(() => {
		if (invoice) {
			form.reset({
				title: invoice.title,
				description: invoice.description,
				amount: invoice.amount,
				dueDate: invoice.dueDate.slice(0, 10),
				status: invoice.status,
			})
		}
	}, [invoice, form])

	const updateInvoice = useMutation({
		mutationFn: (data: EditInvoiceFormData) =>
			api.patch(`/supplier-invoice/${invoiceId}`, {
				...data,
				amount: Number(data.amount),
				dueDate: new Date(data.dueDate),
			}),
		onSuccess: () => {
			toast.success("Boleto atualizado com sucesso.")
			queryClient.invalidateQueries({ queryKey: ["supplierInvoice", invoiceId] })
		},
		onError: () => toast.error("Erro ao atualizar boleto."),
	})

	const deleteInvoice = useMutation({
		mutationFn: () => api.delete(`/supplier-invoice/${invoiceId}`),
		onSuccess: () => {
			toast.success("Boleto deletado com sucesso.")
			router.refresh()
		},
		onError: () => toast.error("Erro ao deletar boleto."),
	})

	const onSubmit = (data: EditInvoiceFormData) => {
		updateInvoice.mutate(data)
	}

	const onDelete = () => {
		deleteInvoice.mutate()
	}

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<Dialog>
				<DialogTrigger className="p-2 m-0 cursor-pointer flex items-center border rounded-sm bg-card/50 hover:bg-card shadow-sm">
					<Pencil className="size-4 ml-2 mr-2" />
					<span>Editar Boleto</span>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader className="flex justify-start items-center gap-3">
						<CardTitle>Detalhes do Boleto</CardTitle>
					</DialogHeader>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Título</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="amount"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Valor</FormLabel>
											<FormControl>
												<Input type="number" step="0.01" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="dueDate"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Data de vencimento</FormLabel>
											<FormControl>
												<Input type="date" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<Select value={field.value} onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="PENDING">Pendente</SelectItem>
												<SelectItem value="PAID">Pago</SelectItem>
												<SelectItem value="CANCELED">Cancelado</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<DialogFooter className="flex items-center justify-between pt-4 gap-2">
								<AlertDialogDelete type="Boleto" onDelete={onDelete} />
								<Button type="submit" className="w-2/4">
									Salvar
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditSupplierInvoiceForm