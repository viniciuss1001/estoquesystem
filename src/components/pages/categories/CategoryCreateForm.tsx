"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"

const CategoryCreateForm = () => {

	const [name, setName] = useState<string>("")
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: async () => {
			const response = await axios.post("/categories", { name })
			return response.data
		},
		onSuccess: () => {
			toast.success("Categoria criada com sucesso")
			setName("")
		},
		onError: () => {
			toast.error("Erro ao criar categoria")
		}
	})


	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>
						Criar nova Categoria
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (!name.trim()) return;
							mutate();
						}}
						className="flex gap-2"
					>
						<Input
							placeholder="Nome da categoria"
							value={name}
							onChange={(e) => setName(e.target.value)}
							disabled={isPending}
						/>
						<Button type="submit" disabled={isPending}>
							Criar
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default CategoryCreateForm