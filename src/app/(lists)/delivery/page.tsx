"use client"

import CreateDeliveryForm from '@/components/pages/delivery/CreateDeliveryForm'
import DeliveryFilterDialog from '@/components/pages/delivery/DeliveryFilterDialog'
import DeliveryStatusBadge from '@/components/pages/delivery/DeliveryStatusBadge'
import EditDeliveryModal from '@/components/pages/delivery/EditDeliveryModal'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import api from '@/lib/axios'
import { useFilteredDeliveries } from '@/lib/queries'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Loader2, Trash } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'


const DeliveryPage = () => {

	const queryClient = useQueryClient()
	const searchParams = useSearchParams()

	const validStatuses = ["PENDING", "COMPLETED", "CANCELED", "LATE"] as const

	const rawStatus = searchParams.get("status")
	const status = validStatuses.includes(rawStatus as any)
		? (rawStatus as typeof validStatuses[number])
		: undefined

	const productId = searchParams.get("productId") || undefined
	const supplierId = searchParams.get("supplierId") || undefined
	const warehouseId = searchParams.get("warehouseId") || undefined


	const { data: deliveries = [], isLoading } = useFilteredDeliveries({
		productId,
		supplierId,
		warehouseId,
		status
	})

	console.log(deliveries)

	const statusColor = {
		PENDING: "bg-yellow-100 text-yellow-800",
		COMPLETED: "bg-green-100 text-green-800",
		CANCELED: "bg-red-100 text-red-800",
		LATE: "bg-orange-100 text-orange-800",
	}

	const deleteDelivery = useMutation({
		mutationFn: async (id: string) => {
			return await api.delete(`/delivery/${id}`)
		},
		onSuccess: () => {
			toast.success("Entrega excluída com sucesso!")
			queryClient.invalidateQueries({ queryKey: ["deliveries"] })
		},
		onError: () => {
			toast.error("Erro ao excluir entrega")
		}
	})

	const handleDelete = async (id: string) => {
		deleteDelivery.mutate(id)
	}

	if (isLoading) return <div className='flex items-center justify-center w-full h-full'><Loader2 className='animate-spin' /></div>


	return (
		<div className='p-6 '>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Entregas</h2>
				<div className="flex gap-2">
					<DeliveryFilterDialog />
					<CreateDeliveryForm />
				</div>
			</div>


			{deliveries.length === 0 ? (<p>Nenhuma entrega cadastrada.</p>) : (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead>Fornecedor</TableHead>
							<TableHead>Quantidade</TableHead>
							<TableHead>Armazém</TableHead>
							<TableHead>Data prevista</TableHead>
							<TableHead>Boleto</TableHead>
							<TableHead>Estado</TableHead>
							<TableHead className="text-right">Ações</TableHead>
							<TableHead>Detalhes</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{deliveries.map((delivery) => (
							<>
								<TableRow key={delivery.id}>
									<TableCell>{delivery.product.name}</TableCell>
									<TableCell>{delivery.supplier.name}</TableCell>
									<TableCell>{delivery.quantity}</TableCell>
									<TableCell>
										{delivery.warehouse.name}
									</TableCell>
									<TableCell>{format(new Date(delivery.expectedAt), "dd/MM/yyyy")}</TableCell>
									<TableCell>

										{delivery.supplierInvoice?.title ?? "-"}
									</TableCell>
									<TableCell>
										<DeliveryStatusBadge status={delivery.status} />
									</TableCell>
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
							</>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	)
}

export default DeliveryPage