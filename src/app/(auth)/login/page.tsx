"use client"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {Loader} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

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
			alert("Credenciais inválidas")
		}
	}

	const loading = form.formState.isSubmitting

	return (
		<div className='min-h-screen flex items-center justify-center px-4 w-full'>
			<Card className='w-full max-w-md shadow-xl rounded-sm'>
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
								{loading ? <Loader className='animate-spin'/> : "Entrar"}
							</Button>

						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<span>
						Ainda não tem conta? {" "} <Link href='/register' className='text-blue-500'> Registre-se</Link>
					</span>
				</CardFooter>
			</Card>
		</div>
	)
}

export default LoginPage