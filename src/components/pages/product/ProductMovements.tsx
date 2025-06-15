"use client"

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import api from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Loader2, Repeat2 } from 'lucide-react'
import Link from 'next/link'

interface Movement {
	id: string
	type: "IN" | "OUT" | "TRANSFER"
	quantity: number
	destinationWarehouse: {
		id: string
		name: string
	}
	originWareHouse: {
		id: string
		name: string
	}
	createdAt: string
}

const ProductMovementsComponent = ({ productId }: { productId: string }) => {

	const { data, isLoading, isError } = useQuery<Movement[]>({
		queryKey: ["movements", productId],
		queryFn: async () => {
			const response = await api.get(`/product/${productId}/movements`)

			return response.data ?? []
		}
	})

	if (isLoading) {
		return (
			<div className="flex justify-center items-center p-4">
				<Loader2 className="animate-spin" />
			</div>
		)
	}

	if (isError || !Array.isArray(data)) {
		return <p className="text-destructive">Erro ao carregar movimentações.</p>
	}

	if (data.length === 0) {
		return <p className="text-muted-foreground mt-2">Nenhuma movimentação registrada para este produto.</p>
	}


	return (
		<div className='mt-4 border rounded-md overflow-hidden'>
			<Table>
				<TableHeader>
					<TableRow className='font-bold'>
						<TableHead>Origem</TableHead>
						<TableHead>Destino</TableHead>
						<TableHead>Tipo</TableHead>
						<TableHead>Quantidade</TableHead>
						<TableHead>Data</TableHead>
						<TableHead>Detalhes</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((mov) => (
						<TableRow key={mov.id}>
							<TableCell>
								{mov.originWareHouse?.name ?? "-"}
							</TableCell>
							<TableCell>
								{mov.destinationWarehouse?.name ?? "-"}
							</TableCell>
							<TableCell>
								{/* type transfer */}
								{mov.type === "TRANSFER" && (
									<div className="flex items-center gap-1">
										<Repeat2 className="w-4 h-4 text-blue-600" />
										<span>Transferência</span>
									</div>
								)}

								{/* type in */}
								{mov.type === "IN" && (
									<div className="flex items-center gap-1">
										<ArrowDownWideNarrow className="w-4 h-4 text-green-800" />
										<span>Entrada</span>
									</div>
								)}

								{/* type out */}
								{mov.type === "OUT" && (
									<div className="flex items-center gap-1">
										<ArrowUpNarrowWide className="w-4 h-4 text-red-900" />
										<span>Saída</span>
									</div>
								)}
							</TableCell>
							<TableCell>{mov.quantity}</TableCell>
							<TableCell>{new Date(mov.createdAt).toLocaleDateString()}</TableCell>
							<TableCell>
								<Link href={`/movements/${mov.id}`}>
									Detalhes
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default ProductMovementsComponent