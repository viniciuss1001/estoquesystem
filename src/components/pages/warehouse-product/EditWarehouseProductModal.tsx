"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
	quantity: z.coerce.number().int().positive("Quantidade deve ser positiva"),
})

type FormData = z.infer<typeof formSchema>

interface EditWarehouseProductModalProps {
	warehouseId: string
	productId: string
	currentQuantity: number
	onUpdated: () => void
}


const EditWarehouseProductModal = ({ warehouseId, productId, currentQuantity, onUpdated }: EditWarehouseProductModalProps) => {

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(true)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			quantity: currentQuantity
		}
	})

	const onSubmit = async (data: FormData) => {
		try {
			api.patch(`/warehouse-products/${warehouseId}/${productId}`, data)
			toast.success("Quantidade atualizada com sucesso!")
			onUpdated()

			setOpen(false)
			setLoading(false)
		} catch (error) {
			toast.error("Erro ao atualizar quantidade")
			setLoading(false)
		}
	}

	return (
		<div>
			<Dialog open={open} onOpenChange={(o) => {
				setOpen(o)
				if (o) form.reset({ quantity: currentQuantity })
			}}>
				<DialogTrigger asChild>
					<Button size="sm" variant="outline" className="flex gap-1 items-center">
						<Pencil className="w-4 h-4" />
						Editar
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Editar Quantidade</DialogTitle>
					</DialogHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

							<FormField
								control={form.control}
								name="quantity"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Quantidade</FormLabel>
										<FormControl>
											<Input type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
					<DialogFooter>
						<Button type="submit" disabled={loading}>
							{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar"}
						</Button>
					</DialogFooter>
				</DialogContent>

			</Dialog>
		</div>
	)
}

export default EditWarehouseProductModal