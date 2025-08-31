"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import { SlashIcon, UserPlus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import RegisterUserDialog from "./_components/RegisterUserDialog"

interface Company {
	id: string
	name: string
	cnpj: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cnpjScjema = z.object({
	cnpj: z.string().min(14, "CNPJ Inválido").max(18)
})

type CnpjFormData = z.infer<typeof cnpjScjema>

const RegisterPage = () => {


	const form = useForm<CnpjFormData>({
		defaultValues: {
			cnpj: ""
		}
	})

	const [company, setCompany] = useState<Company | null>(null)

	const { mutate: validateCnpj, isPending } = useMutation({
		mutationFn: async (data: CnpjFormData) => {
			const response = await api.post("company/validate", data)
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

	return (
		<div className="w-1/2 mx-auto py-10 flex flex-col items-center justify-center">
			<Card className="max-w-1/2 w-1/2 border-none">
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
									<Link href={"/login"}>
										Entrar
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
							<SlashIcon />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>
									Cadastrar Usuário
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>


				<CardHeader>
					<CardTitle className="flex gap-2">
						<UserPlus />
						<h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuário</h1>
					</CardTitle>
					<CardDescription className="text-sm">
						Para cadastrar um usuário, primeiro informe o CNPJ da empresa ao qual trabalha.
					</CardDescription>

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

							<CardFooter className="flex items-end justify-end ">
								{!company && (
									<Button type="submit" disabled={isPending} className="cursor-pointer">
										{isPending ? "Validando..." : "Validar CNPJ"}
									</Button>
								)}

								{company && (
									<Dialog>
										<DialogTrigger asChild>
											<Button className="mt-6 w-full cursor-pointer">Prosseguir com cadastro</Button>
										</DialogTrigger>
										<DialogContent>
											<RegisterUserDialog companyId={company.id} companyName={company.name} />
										</DialogContent>
									</Dialog>
								)}
							</CardFooter>
						</form>
					</Form>
					<CardDescription className="mt-2">
						Ainda não tem uma empresa? <Link href={"/register/company"} className="text-sm text-blue-500 hover:underline">Criar</Link>
					</CardDescription>
				</CardContent>

			</Card>
		</div>
	)
}

export default RegisterPage