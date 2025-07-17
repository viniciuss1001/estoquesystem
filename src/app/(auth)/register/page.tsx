"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import RegisterUserDialog from "./_components/RegisterUserDialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Company {
	id: string
	name: string
	cnpj: string
}

const cnpjScjema = z.object({
	cnpj: z.string().min(14, "CNPJ Inválido").max(18)
})

type CnpjFormData = z.infer<typeof cnpjScjema>

const RegisterPage = () => {
	const router = useRouter()

	const form = useForm<CnpjFormData>({
		defaultValues: {
			cnpj: ""
		}
	})

	const [company, setCompany] = useState<Company | null>(null)

	const { mutate: validateCnpj, isPending } = useMutation({
		mutationFn: async (data: CnpjFormData) => {
			const response = await api.post("/api/company/validate-cnpj", data)
			return response.data
		},
		onSuccess: (data) => {
			toast.success("Empresa encontrada!")
			setCompany(data)
		},
		onError: () => {
			toast.error("Empresa não encontrada.")
			setCompany(null)
		},
	})

	const onSubmit = async (data: CnpjFormData) => {
		validateCnpj(data)
	}
	const loading = form.formState.isSubmitting

	return (
		<div className="w-1/2 mx-auto py-10  flex items-center justify-center">
			<Card className="max-w-1/2 w-1/2  border-none">
				<CardHeader>
					<CardTitle>

						<h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuário</h1>
					</CardTitle>

				</CardHeader>
				<CardContent>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="cnpj"
								render={({ field }) => (
									<FormItem>
										<FormLabel>CNPJ da Empresa</FormLabel>
										<FormControl>
											<Input placeholder="00.000.000/0000-00" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<CardFooter className="flex items-end justify-end">
								<Button type="submit" disabled={isPending} className="cursor-pointer">
									{isPending ? "Validando..." : "Validar CNPJ"}
								</Button>
							</CardFooter>
						</form>
					</Form>

					{company && (
						<Dialog>
							<DialogTrigger asChild>
								<Button className="mt-6 w-full">Prosseguir com cadastro</Button>
							</DialogTrigger>
							<DialogContent>
								<RegisterUserDialog companyId={company.id} companyName={company.name} />
							</DialogContent>
						</Dialog>
					)}
				</CardContent>

			</Card>
		</div>
	)
}

export default RegisterPage