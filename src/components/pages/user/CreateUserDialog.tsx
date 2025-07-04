"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserPlus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(2, "Nome Obrigatório."),
	email: z.string().email("Email inválido."),
	password: z.string().min(6, "Mínino de 6 caracteres."),
	office: z.enum(["ADMIN", "Gestor"], {
		required_error: "Selecione o cargo."
	}).optional(),
	phone: z.string().min(8, "Telegone é obigatório"),
	department: z.string().min(1, "Departamento é obrigatório."),
	description: z.string().optional()
})

type RegisterFormValues = z.infer<typeof formSchema>


const CreateUserDialog = () => {

	const router = useRouter()
	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<RegisterFormValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			office: "Gestor",
			phone: "",
			department: "",
			description: ""
		}
	})

	const createUser = useMutation({
		mutationFn: async (data: RegisterFormValues) => {
			await api.post("/register", data)
		},
		onSuccess: () => {
			toast.success("Usuário criado com sucesso!")
			form.reset()
			router.refresh()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ["users"] })
		},
		onError: (error) => {
			toast.error("Erro ao criar usuário.")
			console.log(error)
		}
	})

	const onSubmit = async (data: RegisterFormValues) => {
		createUser.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant='ghost' className="flex cursor-pointer items-center mb-auto">
					<UserPlus className="size-4" />
					Criar usuário
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Criar um novo usuário
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Nome
									</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Nome do usuário" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" placeholder="seu@email.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel>Telefone</FormLabel>
									<FormControl>
										<Input type="text" placeholder="(00) 0000-0000" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="office"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Cargo
									</FormLabel>
									<FormControl>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Cargo" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="ADMIN">Admin</SelectItem>
												<SelectItem value="GESTOR">Gestor</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="department"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel>Departamento</FormLabel>
									<FormControl>
										<Input type="text" placeholder="Seu Departamento" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input type="password" placeholder="••••••" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex items-center justify-between gap-2 ">
							<DialogClose asChild>
								<Button variant='destructive' className="cursor-pointer">
									Cancelar
								</Button>
							</DialogClose>

							<Button type="submit" variant="default">
								Criar usuário
							</Button>
						</DialogFooter>

					</form>

				</Form>
			</DialogContent>

		</Dialog>
	)
}

export default CreateUserDialog