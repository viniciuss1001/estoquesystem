"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useId, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const userSchema = z.object({
	name: z.string().min(2, "Nome Obrigatório."),
	email: z.string().email("Email inválido.").optional(),
	password: z.string().optional(),
	office: z.enum(["ADMIN", "Gestor"], {
		required_error: "Selecione o cargo."
	}).optional(),
	phone: z.string().min(8, "Telegone é obigatório").optional(),
	department: z.string().min(1, "Departamento é obrigatório.").optional(),
	description: z.string().optional()
})

type FormValues = z.infer<typeof userSchema>

interface ThisUserId {
	userId: string
}

const EditUserModal = ({ userId }: ThisUserId) => {

	const [open, setOpen] = useState(false)
	const { data: session } = useSession()
	const router = useRouter()
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(userSchema),
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

	const { data: user, isLoading } = useQuery({
		queryKey: ["user", userId],
		queryFn: async () => {
			const response = await api.get(`/user/${userId}`)
			return response.data
		}
	})

	useEffect(() => {
		if (user) {
			form.reset({
				name: user.name,
				email: user.email,
				phone: user.phone || "",
				department: user.department || "",
				description: user.description || "",
				office: user.office || "Gestor",
				password: "",
			})
		}
	}, [user, form])

	const updateUser = useMutation({
		mutationFn: async (data: FormValues) => {
			const response = await api.patch(`/user/${userId}`, data)
			return response.data
		},
		onSuccess: () => {
			toast.success("Usuário atualizado com sucesso!")
			router.refresh()
			setOpen(false)
			queryClient.invalidateQueries({ queryKey: ["user", userId] })
		},
		onError: (error) => {
			toast.error("Erro ao atualizar usuário")
			console.log(error)
		}
	})


	const onSubmit = async (data: FormValues) => {
		updateUser.mutate(data)
	}

	return (

		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="cursor-pointer flex items-center justify-center">

					<Pencil className="size-4" />
					Editar Usuário
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex justify-start 
				 gap-3">
					<DialogTitle>Editar Informações</DialogTitle>
					<DialogDescription>
						Edite informações do usuário
					</DialogDescription>
				</DialogHeader>


				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input placeholder="Nome do usuário" {...field} />
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
										<Input type="email" placeholder="Email do usuário" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="department"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Departamento</FormLabel>
									<FormControl>
										<Input type="text" placeholder="Departamento" {...field} />
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
										<Input type="text" placeholder="Telefone" {...field} />
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
										<Textarea placeholder="Descrição" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>

							<Button type="submit" className="w-full cursor-pointer" >
								Salvar alterações
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>

		</Dialog>

	)
}

export default EditUserModal