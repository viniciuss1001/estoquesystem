"use client"
import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { useServiceProvider } from "@/lib/queries"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	email: z.string().email().optional(),
	phone: z.string().min(8, "O telefone é obrigatório."),
	cnpj: z.string().optional(),
	description: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface EditServiceProviderFormProps {
	serviceProviderId: string
}

const EditServiceProviderForm = ({ serviceProviderId }: EditServiceProviderFormProps) => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			cnpj: "",
			description: ""
		}
	})

	const { data: serviceProvider, isLoading } = useServiceProvider(serviceProviderId as string)

	useEffect(() => {
		if (serviceProvider) {
			form.reset({
				name: serviceProvider.name,
				email: serviceProvider.email,
				phone: serviceProvider.phone,
				cnpj: serviceProvider.cnpj,
				description: serviceProvider.description
			})
		}
	}, [serviceProvider, form])

	const updateServiceProvider = useMutation({
		mutationFn: (data: FormData) => api.patch(`/service-provider/${serviceProviderId}`, data),
		onSuccess: () => {
			toast.success('Prestador atualizado com sucesso!')
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['serviceProvider', serviceProviderId] })
		},
		onError: () => toast.error('Erro ao atualizar prestador.'),
	})

	const deleteServiceProvider = useMutation({
		mutationFn: () => api.delete(`/service-provider/${serviceProviderId}`),
		onSuccess: () => {
			toast.success('Prestador deletado com sucesso.')
			router.refresh()
			
		},
		onError: () => toast.error('Erro ao deletar Prestador.'),
	})

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	const onSubmit = (data: FormData) => {
		updateServiceProvider.mutate(data)
	}

	const onDelete = () => {
		deleteServiceProvider.mutate()
	}

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger className="p-0 m-0 cursor-pointer">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent >
					<DialogHeader className="flex justify-start items-center gap-3">
						<DialogTitle>Detalhes do Fornecedor</DialogTitle>

					</DialogHeader>

					<Form {...form} >
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="mb-4">
										<FormLabel>Nome</FormLabel>
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
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email"{...field} />
										</FormControl>
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
										<FormControl>
											<Input {...field} placeholder="(**) ****-****" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="cnpj"
								render={({ field }) => (
									<FormItem>
										<FormLabel>CNPJ</FormLabel>
										<FormControl>
											<Input {...field} placeholder="CNPJ da empresa" />
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

							<DialogFooter className="flex items-center justify-between pt-4 gap-2">
								<AlertDialogDelete
									type="Fornecedor"
									onDelete={onDelete} />
								<Button
									type="submit"
									className="cursor-pointer flex rounded-sm w-2/4">
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

export default EditServiceProviderForm