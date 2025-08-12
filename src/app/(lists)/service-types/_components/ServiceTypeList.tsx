"use client"
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import api from '@/lib/axios'
import { useServiceTypes } from '@/lib/queries'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import ServiceTypeEditDialog from './ServiceTypeEditDialog'
import { ServiceType } from '@/types/types'

const ServiceTypeList = () => {

	const queryClient = useQueryClient()

	const { data: serviceTypes = [] } = useServiceTypes()

	const deleteMutation = useMutation({
		mutationFn: async (id: string) => {
			await api.delete(`/service-type/${id}`);
		},
		onSuccess: () => {
			toast.success("Categoria deletada com sucesso");
			queryClient.invalidateQueries({ queryKey: ["categories"] });
		},
		onError: () => {
			toast.error("Erro ao deletar categoria");
		},
	})
	return (
		<Card className="border-none max-w-2xl ml-auto mr-auto">
			<CardHeader>
				<CardTitle>Tipos de Serviço</CardTitle>
				<CardDescription>
					Total de {serviceTypes.length} tipos de serviço (s) registrados.
				</CardDescription>
			</CardHeader>

			<div className="overflow-x-auto p-4">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Tipo de Serviço</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{serviceTypes.length === 0 ? (
							<TableRow>
								<TableCell colSpan={2} className="text-center">
									Nenhum tipo de serviço registrado.
								</TableCell>
							</TableRow>
						) : (
							serviceTypes.map((serviceType: ServiceType) => (
								<TableRow key={serviceType.id}>
									<TableCell>{serviceType.name}</TableCell>
									<TableCell className="text-right space-x-2 flex ml-auto gap-2 justify-end items-end">

										<ServiceTypeEditDialog serviceType={serviceType} />

										<Button
											variant="destructive"
											size="sm"
											onClick={() => deleteMutation.mutate(serviceType.id)}
											className="flex gap-2 cursor-pointer"
										>
											<Trash2 className="size-4" />
											Excluir
										</Button>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>
		</Card>
	)
}

export default ServiceTypeList