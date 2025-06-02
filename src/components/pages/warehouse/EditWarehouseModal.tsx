"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
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

const schema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	location: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface EditWarehouseModalProps {
	warehouse: {
		id: string
		name: string
		location?: string | null
	}
	onUpdated?: () => void
}

export default function EditWarehouseModal({ warehouse, onUpdated }: EditWarehouseModalProps) {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: warehouse.name,
			location: warehouse.location ?? "",
		},
	})

	const onSubmit = async (data: FormData) => {
		setLoading(true)
		try {
			await api.put(`/warehouse/${warehouse.id}`, data)
			toast.success("Armazém atualizado com sucesso!")
			setOpen(false)
			onUpdated?.()
		} catch {
			toast.error("Erro ao atualizar armazém.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
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
						<Button type="submit" disabled={loading}>
							{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar"}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
