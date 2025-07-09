"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
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


const CreateServiceProviderForm = () => {
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

	const createServiceProvider = useMutation({
		mutationFn: async (data: FormData) => {
			await api.post('/service-provider', data)
		},
		onSuccess: () => {
			toast.success('Prestador criado com sucesso!')
			router.refresh()
			form.reset()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ['serviceproviders'] })
		},
		onError: () => {
			toast.error('Erro ao criar prestador.')
		},
	})

	const onSubmit = (data: FormData) => {
		createServiceProvider.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus className="size-4" />
					Criar Prestador de Serviço
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cadastro de Fornecedor</DialogTitle>
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


						<DialogFooter className="flex gap-4 items-center justify-end mt-4 p-2">
							<DialogClose className="cursor-pointer p-2 hover:bg-card transition rounded-sm w-1/4">
								Cancelar
							</DialogClose>
							<Button type="submit" disabled={form.formState.isSubmitting} className="w-2/3 flex justify-center p-3 cursor-pointer">
								{form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : 'Salvar'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateServiceProviderForm