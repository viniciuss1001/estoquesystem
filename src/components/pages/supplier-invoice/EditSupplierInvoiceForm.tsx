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
import { useSupplierInvoice } from "@/lib/queries"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { EditInvoiceFormData, editInvoiceSchema } from "./formSchema"

interface EditSupplierInvoiceModalProps {
	invoiceId: string
}


const EditSupplierInvoiceForm = ({ invoiceId }: EditSupplierInvoiceModalProps) => {

	const [open, setOpen] = useState(false)

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

	const { data: invoice, isLoading } = useSupplierInvoice(invoiceId as string)

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

	const { mutate: updateInvoice, isPending } = useMutation({
		mutationFn: (data: EditInvoiceFormData) =>
			api.patch(`/supplier-invoice/${invoiceId}`, {
				...data,
				amount: Number(data.amount),
				dueDate: new Date(data.dueDate),
			}),
		onSuccess: () => {
			toast.success("Boleto atualizado com sucesso.")
			queryClient.invalidateQueries({ queryKey: ["supplierInvoice", invoiceId] })
			setOpen(false)
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
		console.log("dados enviados", data)
		updateInvoice(data)
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
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						onClick={() => {
							if (invoice) setOpen(true)
						}}
						disabled={!invoice}
						className="p-2 m-0 cursor-pointer flex items-center shadow-sm"
					>
						<Pencil className="size-4 ml-2 mr-2" />
						<span>Editar Boleto</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader className="flex justify-start items-center gap-3">
						<CardTitle>Detalhes do Boleto</CardTitle>
					</DialogHeader>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit, (errors) => {
								console.log("erros de validação:", errors)
							})}
							className="space-y-4">
							{/* title */}
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

							{/* description */}
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

								{/* amount */}
								<FormField
									control={form.control}
									name="amount"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Valor</FormLabel>
											<FormControl>
												<Input
													type="number"
													step="0.01"
													value={field.value}
													onChange={(e) => field.onChange(Number(e.target.value))}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* dueDate */}
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

							{/* status */}
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
								<Button
									type="submit"
									className="w-2/4 cursor-pointer"
									disabled={isPending}
								>
									{isPending ? (
										<Loader2 className="animate-spin size-4 mr-2" />
									) : "Atualizar Boleto"}

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