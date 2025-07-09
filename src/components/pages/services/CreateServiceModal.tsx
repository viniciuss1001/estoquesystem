"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { format } from "date-fns"
import { CalendarIcon, Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	providerName: z.string().min(1, "Nome é obrigatório."),
	email: z.string().email("E-mail inválido."),
	phone: z.string().min(8, "Telefone inválido."),
	serviceType: z.string().min(1, "Tipo de serviço é obrigatório."),
	serviceDate: z.date(),
	cost: z.coerce.number().min(0),
	status: z.enum(["PENDING", "COMPLETED", "CANCELED"]),
	location: z.string().optional(),
	description: z.string().optional(),
	attachmentUrl: z.string().url().optional().or(z.literal(""))
})

type FormData = z.infer<typeof formSchema>

const CreateServiceModal = () => {
	const [open, setOpen] = useState(false)

	const queryClient = useQueryClient()

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			providerName: "",
			email: "",
			phone: "",
			serviceType: "",
			serviceDate: new Date(),
			cost: 0,
			status: "PENDING",
			location: "",
			description: "",
			attachmentUrl: "",
		},
	})

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
							name="providerName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome do Prestador</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl><Input type="email" {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefone</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="serviceType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tipo de Serviço</FormLabel>
									<FormControl><Input {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="serviceDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Data do Serviço</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
												>
													<CalendarIcon className="mr-2 h-4 w-4" />
													{field.value ? format(field.value, "dd/MM/yyyy") : <span>Escolha uma data</span>}
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="cost"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Custo</FormLabel>
									<FormControl><Input type="number" step="0.01" {...field} /></FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem>
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
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Localização</FormLabel>
									<FormControl><Input {...field} /></FormControl>
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
						{/* Upload opcional */}
						{/* <FormField
              control={form.control}
              name="attachmentUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anexo (URL)</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
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