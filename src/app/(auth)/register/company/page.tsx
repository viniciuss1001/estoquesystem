"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Company {
	id: string
	name: string
	cnpj: string
}

const companySchema = z.object({
	cnpj: z.string().min(14, "CNPJ Inválido").max(18), 
	name: z.string().min(10, "Nome da empresa é obrigatório."), 
	corporateName: z.string().optional()
})

type CompanyFormData = z.infer<typeof companySchema>

const RegisterCompanyPage = () => {
	const router = useRouter()

	const form = useForm<CompanyFormData>({
		defaultValues: {
			cnpj: "", 
			name: "", 
			corporateName: ""
		}
	})


	const { mutate: createCompany, isPending } = useMutation({
		mutationFn: async (data: CompanyFormData) => {
			const response = await api.post("/company", data)
			return response.data
		},
		onSuccess: (data) => {
			toast.success("Empresa criada com sucesso!")
			
		},
		onError: () => {
			toast.error("Erro ao criar empresa.")
		
		},
	})

	const onSubmit = async (data: CompanyFormData) => {
		createCompany(data)
	}

	return (
		<div className="w-1/2 mx-auto py-10  flex items-center justify-center">
			<Card className="max-w-1/2 w-1/2  border-none">
				<CardHeader>
					<CardTitle>

						<h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Empresa</h1>
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

							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome da Empresa</FormLabel>
										<FormControl>
											<Input placeholder="Exemplo Nome Empresa" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="corporateName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome Fantasia da Empresa</FormLabel>
										<FormControl>
											<Input placeholder="Exemplo Companhia LTDA" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<CardFooter className="flex items-end justify-end ">
								<Button type="submit" disabled={isPending} className="cursor-pointer">
									{isPending ? "Criando..." : "Criar Empresa"}
								</Button>
							</CardFooter>
						</form>
					</Form>

					
				</CardContent>

			</Card>
		</div>
	)
}

export default RegisterCompanyPage