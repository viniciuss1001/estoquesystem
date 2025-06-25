"use client"

import { useForm } from "react-hook-form"
import { SupplierInvoiceFormValues, supplierInvoiceSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"
import { toast } from "sonner"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Supplier } from "@/types/types"

const CreateSupplierInvoiceForm = () => {

	const [open, setOpen] = useState(false)
	const [file, setFile] = useState<File | null>(null)
	const queryClient = useQueryClient()

	const form = useForm<SupplierInvoiceFormValues>({
		resolver: zodResolver(supplierInvoiceSchema),
		defaultValues: {
			title: "",
			description: "",
			amount: 0,
			dueDate: "",
			supplierId: "",
			file: undefined
		}
	})


	const { data: suppliers = [] } = useQuery({
		queryKey: ["suppliers"],
		queryFn: async () => {
			const response = await api.get("/supplier")
			return response.data.suppliers as Supplier[]
		}
	})

	const { mutate: createInvoice, isPending } = useMutation({
		mutationFn: async (data: FormData) => {
			const response = await api.post('/supplier-invoice', data)
			
		},
		onSuccess: () => {
			toast.success("Boleto criado com sucesso!")
			form.reset()
			setFile(null)
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['invoices'] })
		},
		onError: () => {
			toast.error("Erro ao criar boleto.")
		}
	})

	function onSubmit(data: SupplierInvoiceFormValues) {
		const formData = new FormData()
		formData.append("title", data.title)
		formData.append("description", data.description || "")
		formData.append("amount", data.amount.toString())
		formData.append("dueDate", data.dueDate)
		formData.append("supplierId", data.supplierId)
		if (file) formData.append("file", file)

		createInvoice(formData)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus className="size-4" />
					Criar Boleto
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Cadastrar Boleto
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

						<FormField
							control={form.control}
							name="supplierId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Fornecedor</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione o fornecedor" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{suppliers?.map((supplier: any) => (
												<SelectItem key={supplier.id} value={supplier.id}>{supplier.name}</SelectItem>
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

						<DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
							<DialogClose className="cursor-pointer p-2 hover:bg-card transition rounded-sm w-1/4">
								Cancelar
							</DialogClose>
							
							<Button type="submit" disabled={isPending} className="cursor-pointer">
								{isPending ? "Salvando..." : "Criar Boleto"}
							</Button>

						</DialogFooter>

					</form>

				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateSupplierInvoiceForm