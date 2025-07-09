"use client"

import { AlertDialogHeader } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { ServiceType } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(2, "O nome da categoria precisa ter ao menos 2 caracteres.")
})

type FormValues = z.infer<typeof formSchema>

interface ServiceTypeEditDialogProps {
	serviceType: ServiceType
}

const ServiceTypeEditDialog = ({ serviceType }: ServiceTypeEditDialogProps) => {
	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: serviceType.name
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: FormValues) => {
			await api.patch(`/service-type/${serviceType.id}`, values)
		},
		onSuccess: () => {
			toast.success("Tipo de serviço atualizado com sucesso")
			queryClient.invalidateQueries({ queryKey: ["servicetypes"] });
			setOpen(false)
		},
		onError: () => {
			toast.error("Falha ao atualizar tipo de serviço")
		}
	})

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="cursor-pointer flex items-center justify-center bg-sidebar-accent rounded-sm p-2">
				<Pencil className="size-4" />
			</DialogTrigger>

			<DialogContent>
				<AlertDialogHeader>
					<DialogTitle>
						Editar tipo de serviço
					</DialogTitle>
				</AlertDialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((values) => mutate(values))}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input {...field} disabled={isPending} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex p-2 gap-3 items-center justify-end">
							<DialogClose className="cursor-pointer p-2 hover:bg-zinc-500/20 transition rounded-sm">
								Cancelar
							</DialogClose>
							<Button type="submit" disabled={isPending}>
								Salvar
							</Button>
						</DialogFooter>
					</form>
				</Form>

			</DialogContent>

		</Dialog>
	)
}

export default ServiceTypeEditDialog