import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader2, Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(1, "Nome do fornecedor é obrigatório."),
	email: z.string().email().min(1, "Email é obrigatório."),
	contactPhone: z.string().min(8, "O telefone é obrigatório."),
	description: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

interface EditSupplierModalProps {
	supplierId: string
}

const EditSupplierModal = ({ supplierId }: EditSupplierModalProps) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			contactPhone: "",
			description: ""
		}
	})

	const { data: supplier, isLoading: isLoadingSupplier } = useQuery({
		queryKey: ['supplier', supplierId],
		queryFn: async () => {
			const response = await api.get(`/supplier/${supplierId}`)
			return response.data
		},
	})

	useEffect(() => {
		if (supplier) {
			form.reset({
				name: supplier.name,
				email: supplier.email,
				contactPhone: supplier.contactPhone,
				description: supplier.description,
			})
		}
	}, [supplier, form])

	const updateSupplier = useMutation({
		mutationFn: (data: FormValues) => api.patch(`/supplier/${supplierId}`, data),
		onSuccess: () => {
			toast.success('Fornecedor atualizado com sucesso!')
			queryClient.invalidateQueries({ queryKey: ['supplier', supplierId] })
		},
		onError: () => toast.error('Erro ao atualizar fornecedor.'),
	})

	const deleteSupplier = useMutation({
		mutationFn: () => api.delete(`/supplier/${supplierId}`),
		onSuccess: () => {
			toast.success('Fornecedor deletado com sucesso.')
			router.refresh()
		},
		onError: () => toast.error('Erro ao deletar fornecedor.'),
	})

	if (isLoadingSupplier) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin" />
			</div>
		)
	}


	const onSubmit = (data: FormValues) => {
		updateSupplier.mutate(data)
	}

	const onDelete = () => {
		deleteSupplier.mutate()
	}

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<Dialog>
				<DialogTrigger className="p-0 m-0 cursor-pointer">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent >
					<DialogHeader className="flex justify-start items-center gap-3">

						<CardTitle>Detalhes do Fornecedor</CardTitle>
					</DialogHeader>

					<Form {...form} >
						<form onSubmit={form.handleSubmit(onSubmit)}>
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

							<div className="grid grid-cols-2 gap-4 mt-4">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input  {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="contactPhone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Telefone</FormLabel>
											<FormControl>
												<Input  {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField

								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Input  {...field} />
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

export default EditSupplierModal