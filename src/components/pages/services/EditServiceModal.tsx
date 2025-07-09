
"use client"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { Service } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório."),
	description: z.string().optional(),
	price: z.coerce.number().min(0, "Preço deve ser maior ou igual a 0"),
})

type FormData = z.infer<typeof formSchema>

interface EditServiceModalProps {
	service: Service
}

export const EditServiceModal = ({ service }: EditServiceModalProps) => {
	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: service.providerName,
			description: service.description ?? "",
			price: service.cost,
		}
	})

	const updateService = useMutation({
		mutationFn: async (data: FormData) => {
			await api.patch(`/services/${service.id}`, data)
		},
		onSuccess: () => {
			toast.success("Serviço atualizado com sucesso")
			queryClient.invalidateQueries({ queryKey: ["services"] })
			setOpen(false)
		},
		onError: (error) => {
			console.error(error)
			toast.error("Erro ao atualizar serviço")
		}
	})

	const onSubmit = (data: FormData) => {
		updateService.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Editar</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Serviço</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
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
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descrição</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Opcional" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Preço</FormLabel>
									<FormControl>
										<Input type="number" step="0.01" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex justify-end gap-2 pt-2">
							<Button type="button" variant="outline" onClick={() => setOpen(false)}>
								Cancelar
							</Button>
							<Button type="submit" disabled={updateService.isPending}>
								Salvar
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
