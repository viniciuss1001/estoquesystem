"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { RotateCcwKey } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
	currentPassword: z.string().min(6),
	newPassword: z.string().min(6),
	confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
	message: "As senhas não coincidem.",
	path: ["confirmPassword"]
})

type FormValues = z.infer<typeof schema>

const ChangePasswordForm = () => {
	const [open, setOpen] = useState(false)

	const form = useForm<FormValues>({
		resolver: zodResolver(schema)
	})

	const changePassword = useMutation({
		mutationFn: async (data: FormValues) => {
			const response = await api.post("/password/change", data)
			return response.data
		},
		onSuccess: () => {
			toast.success("Senha alterada com sucesso!")
			setOpen(false)

		},
		onError: (error) => {
			toast.error("Erro ao atualizar senha")
			console.log(error)
		}
	})

	const onSubmit = (data: FormValues) => {
		changePassword.mutate(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="cursor-pointer flex items-center justify-center">
					<RotateCcwKey className="size-4" />
					Alterar Senha
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader className="flex justify-start 
				 gap-3">
					<DialogTitle>Alterar Senha</DialogTitle>
					<DialogDescription>
						Alterar senha do usuário
					</DialogDescription>
				</DialogHeader>


				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="currentPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha atual</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...form.register("currentPassword")} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nova senha</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Nova senha" {...form.register("newPassword")} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirmar senha</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Confirmar senha" {...form.register("confirmPassword")} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex items-center justify-baseline gap-3">
							<DialogClose >
								<Button variant="ghost" className="cursor-pointer flex items-center">
									Cancelar
								</Button>
							</DialogClose>
							<Button type="submit" className="w-2/3 cursor-pointer">Alterar Senha</Button>
						</DialogFooter>

					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ChangePasswordForm