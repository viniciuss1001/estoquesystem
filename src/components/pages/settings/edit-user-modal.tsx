"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Pencil } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const userSchema = z.object({
	name: z.string().min(2, "Nome Obrigatório."),
	email: z.string().email("Email inválido.").optional(),
	password: z.string().min(6, "Mínino de 6 caracteres.").optional(),
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

	const { data: session } = useSession()
	const route = useRouter()

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

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await api.get(`/user/${userId}`)
				const user = res.data.user

				form.setValue("name", user.name)
				form.setValue("email", user.email)
				form.setValue("phone", user.phone || "")
				form.setValue("department", user.department || "")
				form.setValue("description", user.description || "")

			} catch (err) {
				console.error("Erro ao buscar usuário", err)
			}
		}

		if (userId) fetchUser()
	}, [form, session])



	const onSubmit = async (data: FormValues) => {
		try {
			await api.put(`/user/${userId}`, data)
			toast.success("Dados alterados com sucesso!")
			form.reset()
			route.refresh()
			route.back()

		} catch (error) {
			console.log(error)
			toast.error("Erro ao alterar usuário.")
		}
	}

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<Dialog>
				<DialogTrigger className="cursor-pointer rounded-sm p-2 hover:bg-accent">
					<Pencil className="size-4" />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader className="flex justify-start items-center gap-3">
						<DialogTitle>Detalhes do Usuário</DialogTitle>
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
		</div >
	)
}

export default EditUserModal