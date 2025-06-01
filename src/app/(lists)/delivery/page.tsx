"use client"

import EditDeliveryModal from '@/components/pages/delivery/EditDeliveryModal'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import api from '@/lib/axios'
import { format } from 'date-fns'
import { Loader2, Trash } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface Delivery {
	id: string
	product: {
		id: string
		name: string
	}
	quantity: number
	supplier: {
		id: string
		name: string
	}
	expectedAt: string
	status: "PENDING" | "COMPLETED" | "CANCELLED"
}


const DeliveryPage = () => {

	const [deliveries, setDeliveries] = useState<Delivery[]>([])
	const [loading, setLoading] = useState(true)

	const fetchDeliveries = async () => {
		try {
			const response = await api.get("/delivery")
			setDeliveries(response.data)
		} catch {
			toast.error("Erro ao carregar entregas.")
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async (id: string) => {
		try {
			await api.delete(`/delivery/${id}`)
			toast.success("Entrega excluída com sucesso!")
			setDeliveries((prev) => prev.filter((d) => d.id !== id))
		} catch {
			toast.error("Erro ao excluir entrega.")
		}
	}

	useEffect(() => {
		fetchDeliveries()
	}, [])

	if (loading) return <div className='flex items-center justify-center w-full h-full'><Loader2 className='animate-spin' /></div>


	return (
		<div className='p-6 '>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Entregas</h2>

			</div>


			{deliveries.length === 0 ? (<p>Nenhuma entrega cadastrada.</p>) : (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead>Fornecedor</TableHead>
							<TableHead>Quantidade</TableHead>
							<TableHead>Data prevista</TableHead>
							<TableHead className="text-right">Ações</TableHead>
							<TableHead>Detalhes</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{deliveries.map((delivery) => (
							<TableRow key={delivery.id}>
								<TableCell>{delivery.product.name}</TableCell>
								<TableCell>{delivery.supplier.name}</TableCell>
								<TableCell>{delivery.quantity}</TableCell>
								<TableCell>{format(new Date(delivery.expectedAt), "dd/MM/yyyy")}</TableCell>
								<TableCell className="flex items-center justify-end gap-2">
									<EditDeliveryModal
										deliveryId={delivery.id}
									/>
									<Button variant="destructive" onClick={() => handleDelete(delivery.id)}
										className='cursor-pointer flex gap-2'
									>
										<Trash className="w-4 h-4" />
										Deletar
									</Button>
								</TableCell>
								<TableCell>
									<Link href={`/delivery/${delivery.id}`}>
									Detalhes
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	)
}

export default DeliveryPage