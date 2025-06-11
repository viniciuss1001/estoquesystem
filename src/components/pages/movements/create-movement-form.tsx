"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useWarehouseProductQuantity } from "@/hooks/useWarehouseProductQuantity"
import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const movementSchema = z.object({
	productId: z.string().min(1, "Produto é obrigatório."),
	type: z.enum(["IN", "OUT", "TRANSFER"], {
		required_error: "Tipo de movimentação é obrigatório.",
	}),
	quantity: z.coerce.number().min(0),
	originWarehouseId: z.string().optional(),
	destinationWarehouseId: z.string().optional(),
	notes: z.string().optional(),
	status: z.enum(["PENDING", "COMPLETED", "CANCELED"])
}).superRefine((data, ctx) => {
	if (data.type === "TRANSFER") {
		if (!data.originWarehouseId) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Origem é obrigatória em transferências.",
				path: ["originWarehouseId"],
			});
		}

		if (!data.destinationWarehouseId) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Destino é obrigatório em transferências.",
				path: ["destinationWarehouseId"],
			});
		}

		if (
			data.originWarehouseId &&
			data.destinationWarehouseId &&
			data.originWarehouseId === data.destinationWarehouseId
		) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Origem e destino não podem ser iguais.",
				path: ["destinationWarehouseId"],
			});
		}
	}
})

type MovementFormType = z.infer<typeof movementSchema>

interface Product {
	id: string
	name: string

}

interface Warehouse {
	id: string
	name: string
	location?: string | null
	description: string
}

const CreateMovementForm = () => {
	const [open, setOpen] = useState(false)
	const [products, setProducts] = useState<Product[]>([])
	const [warehouses, setWarehouses] = useState<Warehouse[]>([])
	const router = useRouter()

	const form = useForm<MovementFormType>({
		resolver: zodResolver(movementSchema) as any,
		defaultValues: {
			productId: "",
			type: "IN",
			quantity: 1,
			originWarehouseId: "",
			destinationWarehouseId: "",
			notes: "",
			status: "PENDING"
		}
	})


	const watchType = form.watch("type")

	const productId = form.watch("productId")
	const originWarehouseId = form.watch("originWarehouseId")
	const destinationWarehouseId = form.watch("destinationWarehouseId")

	const { data: originStock } = useWarehouseProductQuantity(productId, originWarehouseId)
	const { data: destinationStock } = useWarehouseProductQuantity(productId, destinationWarehouseId)

	useEffect(() => {
		api.get("/product")
			.then((res) => {
				setProducts(res.data)
				// console.log(res.data)
			})
			.catch(() => toast.error("Erro ao carregar os produtos"))
	}, [])

	useEffect(() => {
		api.get("/warehouse")
			.then((res) => {
				setWarehouses(res.data)
				// console.log(res.data)
			})

			.catch(() => toast.error("Falha ao carregar locais de armazenamento"))

	}, [])

	useEffect(() => {
		if (watchType !== "TRANSFER") {
			form.setValue("originWarehouseId", "")
			form.setValue("destinationWarehouseId", "")
		}
	}, [])

	const onSubmit = async (data: MovementFormType) => {
		try {
			await api.post("/movements", data)
			toast.success("Movimentação registrada com sucesso.")
			router.refresh()
			form.reset()

			setOpen(false)

		} catch (error) {
			toast.error("Erro ao registrar movimentação.")
		}
	}



	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='ghost' className='flex p-2 cursor-pointer'>
					<Plus />
					Criar Movimentação
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>

						Adicionar nova Movimentação
					</DialogTitle>
					<DialogDescription className="w-full flex">
						{originWarehouseId && (
							<div className="p-3 m-3 bg-blue-400/10 border border-blue-600/15 text-white w-full rounded-md">

								{originWarehouseId && (
									<p className="text-sm">
										Estoque em <strong>origem</strong>:{" "}
										<span className="font-medium">{originStock?.quantity ?? 0}</span> unidades
									</p>
								)}

								{destinationWarehouseId && (
									<p className="text-sm ">
										Estoque em <strong>destino</strong>:{" "}
										<span className="font-medium">{destinationStock?.quantity ?? 0}</span> unidades
									</p>
								)}

							</div>
						)}
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="flex gap-2 justify-between">

							<FormField
								control={form.control}
								name="productId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Produto</FormLabel>
										<Select onValueChange={field.onChange} value={field.value} >
											<FormControl className="w-full">
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Selecione o produto" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{products.map(product => (
													<SelectItem key={product.id} value={product.id}>
														{product.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* type */}
							<FormField
								control={form.control}
								name="type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tipo de movimentação</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o tipo" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="IN">Entrada</SelectItem>
												<SelectItem value="OUT">Saída</SelectItem>
												<SelectItem value="TRANSFER">
													Movimentação
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{watchType === "TRANSFER" ? (
							<>
								<FormField
									control={form.control}
									name="originWarehouseId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Origem</FormLabel>
											<Select onValueChange={field.onChange} value={field.value} >
												<FormControl className="w-full">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Selecione o Armazém de Origem" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{warehouses.map(warehouse => (
														<SelectItem key={warehouse.id} value={warehouse.id}>
															{warehouse.name}
														</SelectItem>

													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="destinationWarehouseId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Destino</FormLabel>
											<Select onValueChange={field.onChange} value={field.value} >
												<FormControl className="w-full">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Selecione o Armazém de Destino" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{warehouses.map(warehouse => (
														<SelectItem key={warehouse.id} value={warehouse.id}>
															{warehouse.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						) : (
							<FormField
								control={form.control}
								name="destinationWarehouseId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Destino</FormLabel>
										<Select onValueChange={field.onChange} value={field.value} >
											<FormControl className="w-full">
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Selecione o Armazém de Destino" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{warehouses.map(warehouse => (
													<SelectItem key={warehouse.id} value={warehouse.id}>
														{warehouse.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

						)}

						<FormField
							name="status"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Status</FormLabel>
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione o status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="PENDING">Pendente</SelectItem>
											<SelectItem value="COMPLETED">Concluída</SelectItem>
											<SelectItem value="CANCELED">Cancelada</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>


						<FormField
							control={form.control}
							name="quantity"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Quantidade</FormLabel>
									<FormControl>
										<Input type="number" placeholder="Quantidade" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Observações</FormLabel>
									<FormControl>
										<Textarea placeholder="Alguma observação?" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>


						<DialogFooter>
							<Button type="submit" disabled={form.formState.isSubmitting} className="w-full flex justify-center p-3 cursor-pointer">
								{form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : 'Salvar'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateMovementForm