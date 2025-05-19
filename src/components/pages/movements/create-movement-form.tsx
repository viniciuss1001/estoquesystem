"use client"

import api from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const movementSchema = z.object({
	productId: z.string().min(1, "Produto é obrigatório."),
	type: z.enum(["IN", "OUT"], {
		required_error: "Selecione um tipo de movimentação"
	}),
	quantity: z.coerce.number().positive("Quantidade deve ser maior que 0."),
	destination: z.string().optional(),
	notes: z.string().optional()
})

type MovementFormType = z.infer<typeof movementSchema>

interface Product {
	id: string
	name: string

}

const CreateMovementForm = () => {

	const form = useForm<MovementFormType>({
		resolver: zodResolver(movementSchema),
		defaultValues: {
			productId: "",
			type: "IN",
			quantity: 1,
			destination: "",
			notes: ""
		}
	})

	const [products, setProducts] = useState<Product []>([])

	 useEffect(() => {
    api.get("/product")
      .then(res => setProducts(res.data))
      .catch(() => toast.error("Erro ao carregar os produtos"))
  }, [])

	return (
		<div>CreateMovementForm</div>
	)
}

export default CreateMovementForm