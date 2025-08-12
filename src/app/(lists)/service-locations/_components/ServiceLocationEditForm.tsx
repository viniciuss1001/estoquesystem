"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { ServiceLocation } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(2, "Precisa ter no mínimo 2 caracteres"),
	address: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

interface ServiceLocationEditFormProps {
	serviceLocation: ServiceLocation
}

const ServiceLocationEditForm = ({ serviceLocation }: ServiceLocationEditFormProps) => {

	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: serviceLocation.name,
			address: serviceLocation.address || ""
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: FormValues) => {
			await api.patch(`/service-location/${serviceLocation.id}`, values)
		},
		onSuccess: () => {
			toast.success("Local de Serviço atualizado com sucesso")
			queryClient.invalidateQueries({ queryKey: ["serviceLocations"] });
			setOpen(false)
		},
		onError: () => {
			toast.error("Falha ao atualizar local de serviço")
		}
	})
	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="cursor-pointer flex items-center justify-center bg-sidebar-accent rounded-sm p-2">
				<Pencil className="size-4" />
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Editar Local de Serviço
					</DialogTitle>
				</DialogHeader>

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

						<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input
												placeholder="Endereço do Local"
												{...field}
												disabled={isPending}
											/>
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
		</div>
	)
}

export default ServiceLocationEditForm