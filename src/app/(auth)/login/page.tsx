"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader, SlashIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email({ message: "Email inválido" }),
	password: z.string().min(4, { message: "A senha precisa ter pelo menos 4 caracteres" }),
})

const LoginPage = () => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})
	const router = useRouter()

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const res = await signIn("credentials", {
			...data,
			redirect: false
		})

		if (res?.ok) {
			toast.success("Login bem sucedido!")
			router.push("/dashboard")
		} else {
			toast.error("Credenciais inválidas")
		}
	}

	const loading = form.formState.isSubmitting

	return (
		<div className='min-h-screen flex items-center justify-center px-4 w-full'>
			<Card className='w-full max-w-md shadow-xl rounded-sm'>
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
										Registar
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<SlashIcon />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>
									Entrar
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<CardHeader>
					<CardTitle className='text-2xl text-center font-semibold '>
						Entrar no EstoqueSys
					</CardTitle>
					<CardDescription className='text-sm text-muted-foreground text-center'>
						O mais completo sistema de gerenciamento de estoque!
					</CardDescription>
				</CardHeader>

				<CardContent className=''>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem className='mt-4'>
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
									<FormItem className='mt-4'>
										<FormLabel>Senha</FormLabel>
										<FormControl>
											<Input type="password" placeholder="••••••••" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type='submit' variant='default' className='w-full mt-4 cursor-pointer hover:brightness-95'
								disabled={loading}
							>
								{loading ? <Loader className='animate-spin' /> : "Entrar"}
							</Button>

						</form>
					</Form>
				</CardContent>
				<CardFooter className='flex gap-2 items-center justify-between'>
					<span className='text-muted-foreground text-sm flex gap-1'>
						Não tem conta? {" "} <Link href='/register' className='text-blue-500'> Registre-se</Link>
					</span>
					<span className='text-sm text-muted-foreground flex gap-1'>
						Esqueceu sua senha?
						<Link href="/forgot-password" className="text-blue-500">
							Redefinir
						</Link>
					</span>
				</CardFooter>
			</Card>
		</div>
	)
}

export default LoginPage