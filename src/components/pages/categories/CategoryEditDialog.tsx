"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { Category } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(2, "O nome da categoria precisa ter ao menos 2 caracteres.")
})

interface CategoryEditDialogProps {
	category: Category
}


const CategoryEditDialog = ({ category }: CategoryEditDialogProps) => {
	const [open, setOpen] = useState(false)
	const queryClient = useQueryClient()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: category.name
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: z.infer<typeof formSchema>) => {
			await api.patch(`/categories/${category.id}`, values)
		},
		onSuccess: () => {
			toast.success("Categoria atualizada com sucesso")
			queryClient.invalidateQueries({ queryKey: ["categories"] });
			setOpen(false)
		},
		onError: () => {
			toast.error("Falha ao atualizar categoria")
		}
	})

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="cursor-pointer flex items-center justify-center bg-sidebar-accent rounded-sm p-2">
				<Pencil className="size-4" />
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Editar Categoria
					</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((values) => mutate(values))}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input {...field} disabled={isPending} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<Button type="submit" disabled={isPending}>
								Salvar
							</Button>
						</DialogFooter>
					</form>
				</Form>

			</DialogContent>

		</Dialog>
	)
}

export default CategoryEditDialog