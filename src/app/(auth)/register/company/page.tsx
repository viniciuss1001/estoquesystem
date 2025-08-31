"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const companySchema = z.object({
	cnpj: z.string().min(14, "CNPJ Inválido").max(18),
	name: z.string().min(10, "Nome da empresa é obrigatório."),
	corporateName: z.string().optional()
})

type CompanyFormData = z.infer<typeof companySchema>

const RegisterCompanyPage = () => {

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
		onSuccess: () => {
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
				<div className="flex w-full p-4 items-center justify-left">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href={"/"}>
										Início
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								...
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href={"/register"}>
										Cadastrar Usuário
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

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