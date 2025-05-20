"use client"

import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
	name: z.string().min(1, 'Nome é obrigatório.'),
	email: z.string().email()
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
			email: ""
		}
	})

	useEffect(() => {
		if (session?.user) {
			form.setValue("email", session.user.email || "")
			form.setValue("name", session.user.name || "")
		}
	}, [session, form])

	const onSubmit = async (data: FormValues) => {
		try {
			await api.patch(`/user/${userId}`, data)
			toast.success("Dados alterados com sucesso!")
			form.reset()
			route.refresh()
			
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
						<CardTitle>Detalhes do Usuário</CardTitle>
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

						<Button type="submit" className="w-full cursor-pointer">
							Salvar alterações
						</Button>
					</form>
				</Form>
			</DialogContent>

		</Dialog>
		</div >
	)
}

export default EditUserModal