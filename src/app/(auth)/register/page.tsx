"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const formSchema = z.object({
	name: z.string().min(2, "Nome Obrigatório."),
	email: z.string().email("Email inválido."),
	password: z.string().min(6, "Mínino de 6 caracteres."),
	office: z.enum(["ADMIN", "Gestor"], {
		required_error: "Selecione o cargo."
	})
})

type RegisterFormValues = z.infer<typeof formSchema>

const RegisterPage = () => {
	const router = useRouter()

	const form = useForm<RegisterFormValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			office: "Gestor",
		}
	})

	const onSubmit = async (data: RegisterFormValues) => {
		try {
			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})

			if (!res.ok) {
				const err = await res.json()
				toast.error(err.message || "Erro ao registrar")
				return
			}

			toast.success("Usuário Criado com sucesso.")
			router.push("/login")

		} catch (error) {
			toast.error("Erro ao criar conta.")
		}
	}
	const loading = form.formState.isSubmitting

	return (
		<div className="max-w-md mx-auto mt-10 p-6 rounded-xl">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl text-center font-semibold">
						Crie sua conta e aproveite!
					</CardTitle>
					<CardDescription className='text-sm text-muted-foreground text-center'>
						Registre-se e aproveite o mais completo sistema para gerir seu estoque!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input placeholder="Seu nome" {...field} />
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

							<FormField
								control={form.control}
								name="office"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel>Cargo</FormLabel>
										<FormControl>
											<select {...field} className="w-full border rounded px-3 py-2">
												<option value="adm">Administrador</option>
												<option value="gestor">Gestor</option>
											</select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" variant='default'
								disabled={loading}

								className="mt-4 hover:brightness-95 cursor-pointer w-full p-3"
							>
								{loading ? <Loader className="animate-spin"/> : 'Criar Conta'}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

export default RegisterPage