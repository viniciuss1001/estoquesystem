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
import { useServiceProviders, useSupplierInvoice, useSuppliers } from "@/lib/queries"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { EditInvoiceFormData, editInvoiceSchema } from "../_schema/formSchema"

interface EditSupplierInvoiceModalProps {
	invoiceId: string
}


const EditSupplierInvoiceForm = ({ invoiceId }: EditSupplierInvoiceModalProps) => {

	const [open, setOpen] = useState(false)
	const [file, setFile] = useState<File | null>(null)

	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<EditInvoiceFormData>({
		resolver: zodResolver(editInvoiceSchema),
		defaultValues: {
			providerType: "SUPPLIER",
			supplierId: "",
			title: "",
			description: "",
			amount: 0,
			dueDate: "",
			status: "PENDING",
		}
	})

	const { data: invoice, isLoading } = useSupplierInvoice(invoiceId as string)

	const { data: suppliers = [] } = useSuppliers()
	const { data: serviceProviders = [] } = useServiceProviders()

	const allProviders = [
		...suppliers.map(s => ({ ...s, type: "SUPPLIER" as const })),
		...serviceProviders.map(sp => ({ ...sp, type: "SERVICE_PROVIDER" as const }))
	]

	useEffect(() => {
		if (invoice) {
			form.reset({
				supplierId: invoice.supplier?.id || invoice.serviceProvider?.id,
				providerType: invoice.supplier ? "SUPPLIER" : "SERVICE_PROVIDER",
				title: invoice.title,
				description: invoice.description ?? "",
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
							<FormField
								control={form.control}
								name="supplierId"
								// eslint-disable-next-line @typescript-eslint/no-unused-vars
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fornecedor/Prestador de Serviço</FormLabel>
										<Select onValueChange={(value) => {
											const selected = allProviders.find(p => p.id === value)
											if (selected) {
												form.setValue("supplierId", selected.id)
												form.setValue("providerType", selected.type)
											}
										}}
											value={form.watch("supplierId")}
										>
											<SelectTrigger>
												<SelectValue placeholder="Selecione um fornecedor ou prestador" />
											</SelectTrigger>
											<SelectContent>
												{allProviders.map((provider) => (
													<SelectItem
														key={provider.id}
														value={provider.id}
														data-type={provider.type}
													>
														{provider.name} ({provider.type === "SUPPLIER" ? "Fornecedor" : "Prestador"})
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
								name="amount"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Valor</FormLabel>
										<FormControl>
											<Input type="number" step="0.01" min={1} {...field} />
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

							<div className="space-y-2">
								<label className="text-sm font-medium">Upload do boleto (PDF)</label>
								<Input
									type="file"
									accept="application/pdf"
									onChange={(e) => {
										const f = e.target.files?.[0]
										if (f && f.type === "application/pdf") {
											setFile(f)
										}
									}}
								/>
								{file && <p className="text-sm text-muted-foreground">Arquivo selecionado: {file.name}</p>}
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