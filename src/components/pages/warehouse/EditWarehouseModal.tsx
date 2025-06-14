"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Pencil, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"
import api from "@/lib/axios"
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form"
import AlertDialogDelete from "@/components/shared/alert-dialog-delete-product"

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

export default function EditWarehouseModal({ warehouse, onUpdated,  }: EditWarehouseModalProps) {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: warehouse.name,
			location: warehouse.location ?? "",
			description: warehouse.description ?? ""
		},
	})

	const onSubmit = async (data: FormData) => {
		setLoading(true)
		try {
			await api.patch(`/warehouse/${warehouse.id}`, data)
			toast.success("Armazém atualizado com sucesso!")
			setOpen(false)
			onUpdated?.()
		} catch {
			toast.error("Erro ao atualizar armazém.")
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async () => {
			try {
				await api.delete(`/warehouse/${warehouse.id}`)
				toast.success("Armazém excluído com sucesso!")
			} catch(error) {
				toast.error("Erro ao excluir armazém.")
			// console.log(error)
			}
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

						<DialogFooter  className="flex items-center justify-between pt-4 gap-2">
							
							<AlertDialogDelete 
							onDelete={handleDelete}
							type="Armazém"
							/>

							<Button type="submit" disabled={loading}>
								{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar"}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
