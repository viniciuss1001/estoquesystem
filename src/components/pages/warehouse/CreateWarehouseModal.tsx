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
import { Loader2, Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"
import api from "@/lib/axios"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { useMutation } from "@tanstack/react-query"

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
						<Button type="submit">
							Criar
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
