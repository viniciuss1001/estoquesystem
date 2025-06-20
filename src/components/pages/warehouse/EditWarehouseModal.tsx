"use client"

import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	location: z.string().optional(),
	description: z.string().optional()
})

type FormData = z.infer<typeof schema>

interface EditWarehouseModalProps {
	warehouse: {
		id: string
		name: string
		location?: string | null
		description?: string
	}
	onUpdated?: () => void

}

export default function EditWarehouseModal({ warehouse, }: EditWarehouseModalProps) {
	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: warehouse.name,
			location: warehouse.location ?? "",
			description: warehouse.description ?? ""
		},
	})

	const updateWarehouseMutation = useMutation({
		mutationFn: (data: FormData) => api.patch(`/warehouse/${warehouse.id}`, data),
		onSuccess: () => {
			toast.success("Armazém atualizado com sucesso!")
			queryClient.invalidateQueries({ queryKey: ["warehouse"] })
		},
		onError: () => {
			toast.error("Erro ao atualizar armazém.")
		},
	})

	const deleteWarehouseMutation = useMutation({
		mutationFn: () => api.delete(`/warehouse/${warehouse.id}`),
		onSuccess: () => {
			toast.success("Armazém excluído com sucesso!")
			queryClient.invalidateQueries({ queryKey: ["warehouse"] })
		},
		onError: () => {
			toast.error("Erro ao excluir armazém.")
		},
	})

	const onSubmit = (data: FormData) => {
		updateWarehouseMutation.mutate(data)
	}

	const handleDelete = () => {
		deleteWarehouseMutation.mutate()
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon" className="cursor-pointer">
					<Pencil className="w-4 h-4" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Armazém</DialogTitle>
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
										<Input placeholder="Nome do armazém" {...field} />
									</FormControl>
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
									<FormControl>
										<Input placeholder="Localização (opcional)" {...field} />
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
										<Input placeholder="Descrição (opcional)" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex items-center justify-between pt-4 gap-2">

							<AlertDialogDelete
								onDelete={handleDelete}
								type="Armazém"
							/>

							<Button type="submit" >
								Salvar
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
