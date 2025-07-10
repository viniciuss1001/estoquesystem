"use client"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Plus } from "lucide-react"
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

export default function CreateWarehouseModal() {
	const [open, setOpen] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: { name: '', location: '', description: '' },
	})

	const { mutate: createWarehouse } = useMutation({
		mutationFn: (data: FormData) => api.post('/warehouse', data),
		onSuccess: () => {
			toast.success('Armazém criado com sucesso!')
			setOpen(false)
		},
		onError: () => {
			toast.error('Erro ao criar armazém.')
		},
	})

	const onSubmit = (data: FormData) => {
		createWarehouse(data)
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant='ghost' className="cursor-pointer">
					<Plus className="w-4 h-4 mr-2" />Novo Armazém
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Novo Armazém</DialogTitle>
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
										<Input placeholder="Localização (opcional)" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
							<DialogClose className="cursor-pointer p-2 hover:bg-card transition rounded-sm w-1/4">
								Cancelar
							</DialogClose>
							<Button type="submit" className="w-2/3 cursor-pointer">
								Criar
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
