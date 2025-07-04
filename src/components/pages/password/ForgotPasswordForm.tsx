"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
	email: z.string().email("Digite um e-mail válido")
})

type FormValues = z.infer<typeof schema>

const ForgotPasswordForm = () => {

	const form = useForm<FormValues>({
		resolver: zodResolver(schema)
	})

	const onSubmit = async (data: FormValues) => {
		try {
			await api.post("/password/forgot", data)
			toast.success("Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha.")

		} catch (error) {
			toast.error("Erro ao solicitar definição de senha")
			console.log(error)
		}
	}

  return (
	 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
		<Input 
		type="email"
		placeholder="Digite seu email"
		{...form.register("email")}
		/>

		<Button type="submit" className="w-full">
			Enviar link
		</Button>
	 </form>
  )
}

export default ForgotPasswordForm