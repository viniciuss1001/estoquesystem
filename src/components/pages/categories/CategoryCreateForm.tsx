"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const formSchema = z.object({
	name: z.string().min(2, "Precisa ter no mínimo 2 caracteres")
})

type FormValues = z.infer<typeof formSchema>

const CategoryCreateForm = () => {

	const [name, setName] = useState<string>("")
	const queryClient = useQueryClient()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: ""
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: FormValues) => {
			const response = await axios.post("/categories", values);
			return response.data;
		},
		onSuccess: () => {
			toast.success("Categoria criada com sucesso");
			setName("");
			queryClient.invalidateQueries({ queryKey: ["categories"] })
		},
		onError: () => {
			toast.error("Erro ao criar categoria")
		}
	})


	return (
		<div>
			<Card className="border-none">
				<CardHeader>
					<CardTitle>
						Criar nova Categoria
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit((values) => mutate(values))}
							className="flex gap-2 items-end"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input
												placeholder="Nome da categoria"
												{...field}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" disabled={isPending}
							className="cursor-pointer"
							>
								{isPending ? "Criando..." : "Criar"}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

export default CategoryCreateForm