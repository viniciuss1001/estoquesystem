"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { useOpenSupplierInvoices, useServiceLocations, useServiceProviders, useServiceTypes } from "@/lib/queries"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	serviceProviderId: z.string().min(1, "Prestador é obrigatório."),
	serviceTypeId: z.string().min(1, "Tipo de serviço é obrigatório."),
	serviceLocationId: z.string().min(1, "Local de serviço é obrigatório."),
	serviceDate: z.date({ required_error: "Data obrigatória" }),
	cost: z.coerce.number().min(0, "Custo deve ser zero ou maior."),
	status: z.enum(["PENDING", "COMPLETED", "CANCELED"]),
	description: z.string().optional(),
	attachmentUrl: z.string().optional(),
	invoiceId: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

const CreateServiceModal = () => {
	const [open, setOpen] = useState(false)

	const queryClient = useQueryClient()

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			serviceProviderId: "",
			serviceTypeId: "",
			serviceDate: new Date(),
			cost: 0,
			status: "PENDING",
			serviceLocationId: "",
			description: "",
			attachmentUrl: "",
			invoiceId: ""
		},
	})

	const { data: serviceProviders = [] } = useServiceProviders()
	const { data: serviceTypes = [] } = useServiceTypes()
	const { data: serviceLocations = [] } = useServiceLocations()
	const {data: invoices = []} = useOpenSupplierInvoices()

	const createService = useMutation({
		mutationFn: async (data: FormData) => {
			await api.post("/service", data)
		},
		onSuccess: () => {
			toast.success("Serviço criado com sucesso.")
			queryClient.invalidateQueries({ queryKey: ["services"] })
			form.reset()
			setOpen(false)
		},
		onError: () => {
			toast.error("Erro ao criar serviço.")
		}
	})

	const onSubmit = (data: FormData) => {
		createService.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="flex items-center cursor-pointer">
					<Plus className="mr-2 h-4 w-4" />
					Criar Serviço
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-xl">
				<DialogHeader>
					<DialogTitle>Adicionar novo Serviço</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="serviceProviderId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Produto</FormLabel>
									<Select onValueChange={field.onChange} value={field.value} >
										<FormControl className="w-full">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Selecione o Prestador" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{serviceProviders.map(serviceProvider => (
												<SelectItem key={serviceProvider.id} value={serviceProvider.id}>
													{serviceProvider.name}
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
							name="serviceTypeId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tipo de Serviço</FormLabel>
									<Select onValueChange={field.onChange} value={field.value} >
										<FormControl className="w-full">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Selecione o tipo de serviço" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{serviceTypes.map(serviceType => (
												<SelectItem key={serviceType.id} value={serviceType.id}>
													{serviceType.name}
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
							name="serviceDate"
							render={({ field }) => {
								const formattedDate = field.value ? field.value.toISOString().substring(0, 10) : "";

								return (
									<FormItem className="mt-4">
										<FormLabel>Data do serviço</FormLabel>
										<FormControl>
											<Input
												className="w-full flex gap-4"
												type="date"
												value={formattedDate}
												onChange={(e) => {
													const date = e.target.value ? new Date(e.target.value) : null;
													field.onChange(date);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<FormField
							control={form.control}
							name="cost"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Custo</FormLabel>
									<FormControl>
										<Input type="number" step="0.01" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Status</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione um status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="PENDING">Pendente</SelectItem>
											<SelectItem value="COMPLETED">Concluído</SelectItem>
											<SelectItem value="CANCELED">Cancelado</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="serviceLocationId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Local do serviço</FormLabel>
									<Select onValueChange={field.onChange} value={field.value} >
										<FormControl className="w-full">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Selecione o local do serviço" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{serviceLocations.map(serviceLocation => (
												<SelectItem key={serviceLocation.id} value={serviceLocation.id}>
													{serviceLocation.name}
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
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descrição</FormLabel>
									<FormControl><Textarea {...field} rows={3} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="invoiceId"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel>Boleto (opcional)</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione o boleto ou deixe em branco" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{invoices.map((invoice) => (
												<SelectItem key={invoice.id} value={invoice.id}>
													{invoice.title}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Upload opcional */}
						<FormField
							control={form.control}
							name="attachmentUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Anexo (URL)</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter className="flex items-center justify-end gap-2">
							<DialogClose>
								<Button variant="ghost" className="cursor-pointer">
									Cancelar
								</Button>
							</DialogClose>


							<Button type="submit" className="w-2/3 cursor-pointer">
								Salvar
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateServiceModal