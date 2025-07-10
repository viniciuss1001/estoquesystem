"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres.")
})

type FormValues = z.infer<typeof schema>

export default function ResetPasswordForm() {
	const params = useSearchParams()
	const token = params.get("token")
	const router = useRouter()
	const [success, setSuccess] = useState(false)

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data: FormValues) => {
		try {
			await api.post("/password/reset", { ...data, token })
			toast.success("Senha redefinida com sucesso!")
			setSuccess(true)
		} catch {
			toast.error("Erro ao redefinir senha.")
		}
	}

	return (
		<div className="space-y-4">
			{success ? (
				<Button className="w-full" onClick={() => router.push("/login")}>
					Ir para login
				</Button>
			) : (
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<Input
						type="password"
						placeholder="Nova senha"
						{...form.register("password")}
					/>
					<Button type="submit" className="w-full">Redefinir senha</Button>
				</form>
			)}
		</div>
	)
}