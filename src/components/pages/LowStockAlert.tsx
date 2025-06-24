"use client"

import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { AlertTriangle, Loader2 } from "lucide-react"
import Link from "next/link"

interface LowStockProduc {
	id: string
	name: string
	quantity: number
	minimumStock: number | null
}

const LowStockAlert = () => {

	const { data = [], isLoading, isError } = useQuery<LowStockProduc[]>({
		queryKey: ["lowStockProducts"],
		queryFn: async () => {
			const respone = await api.get('/product/low-stock')
			return respone.data
		}
	})

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
			</div>
		)
	}

	if (isError) {
		return <p className="text-red-600">Erro ao carregar alertas</p>
	}

	return (
		<div className="p-4 bg-background border border-card rounded-md shadow-sm max-w-sm">

			<h3 className="flex items-center font-semibold mb-3">
				<AlertTriangle className="w-5 h-5 mr-2" />
				Produtos com Estoque Baixo
			</h3>

			{!data || data.length === 0 && (
				<p className="text-green-600">Nenhum produto com estoque baixo.</p>
			)}

			<ul className="space-y-2 max-h-64 overflow-y-auto">
        {data.map((product) => (
          <li
            key={product.id}
            className={clsx(
              "flex justify-between items-center p-2 rounded",
              product.quantity <= 0
                ? "bg-red-100 text-red-900 font-bold"
                : "bg-yellow-100 text-yellow-900"
            )}
          >
            <Link href={`/products/${product.id}`}>
				<span>{product.name}</span>
				</Link>
            <span>
              {product.quantity} / {product.minimumStock ?? 0}
            </span>
          </li>
        ))}
      </ul>
		</div>
	)
}

export default LowStockAlert