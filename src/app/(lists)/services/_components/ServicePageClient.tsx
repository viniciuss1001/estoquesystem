"use client"

import CreateServiceModal from "@/app/(lists)/services/_components/CreateServiceModal"
import ServiceFilterModal from "@/app/(lists)/services/_components/ServiceFilterModal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFilteredServices } from "@/lib/queries"
import { FileText } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { EditServiceModal } from "./EditServiceModal"


const ServicesPageClient = () => {
	const searchParams = useSearchParams()

	const validStatuses = ["PENDING", "COMPLETED", "CANCELED"] as const

	const rawStatus = searchParams.get("status")
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const status = validStatuses.includes(rawStatus as any)
		? (rawStatus as (typeof validStatuses)[number])
		: undefined

	const providerId = searchParams.get("providerId") || undefined
	const serviceType = searchParams.get("type") || undefined

	const location = searchParams.get("location") || undefined
	const invoiceId = searchParams.get("invoiceId") || undefined
	const fromDateParam = searchParams.get("fromDate")
	const toDateParam = searchParams.get("toDate")

	const { data: services = [], isLoading } = useFilteredServices({
		providerId,
		serviceType,
		status,
		location,
		invoiceId,
		fromDate: fromDateParam || undefined,
		toDate: toDateParam || undefined
	})

	const statusLabels: Record<string, string> = {
		PENDING: "Pendente",
		COMPLETED: "Concluído",
		CANCELED: "Cancelado",
	}

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-4">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold mb-2">Lista de Serviços</h2>
					{services.length > 0 && (
						<p className="text-sm text-muted-foreground mb-4">
							Total de {services.length} serviço(s) sendo exibidos.
						</p>
					)}
				</div>

				<div className="flex gap-3 items-center justify-end">
					<ServiceFilterModal />
					{/* <ServiceListActions
						services={services}
						userName={session?.user.name || "usuário"}
						userNameOffice={session?.user.office || "Cargo desconhecido"}
					/> */}
					<CreateServiceModal />
				</div>
			</div>

			<div className="w-full p-3 flex items-center justify-center">
				<Table className="ml-auto mr-auto">
					<TableHeader>
						<TableRow>
							<TableHead>Prestador</TableHead>
							<TableHead>Tipo</TableHead>
							<TableHead>Local</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Data</TableHead>
							<TableHead>Boleto</TableHead>
							<TableHead>Ações</TableHead>
							<TableHead>Detalhes</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{services.length === 0 && (
							<TableRow>
								<TableCell colSpan={8} className="text-center">
									Nenhum prestador encontrado.
								</TableCell>
							</TableRow>
						)}

						{isLoading ? (
							<TableRow>
								<TableCell colSpan={9} className="text-center">
									Carregando...
								</TableCell>
							</TableRow>
						) : (
							services.map((service) => (
								<TableRow key={service.id}>
									<TableCell>{service.provider.name}</TableCell>
									<TableCell>{service.type.name}</TableCell>
									<TableCell>{service.location.name ?? "Não informado"}</TableCell>
									<TableCell>{statusLabels[service.status]}</TableCell>
									<TableCell>
										{new Date(service.createdAt).toLocaleDateString()}

									</TableCell>

									<TableCell>
										{service.invoice ? (
											<Link
												href={`/supplier-invoice/${service.invoice.id}`}
												className="hover:text-blue-600  flex text-sm gap-1"
											>
												<FileText className="size-4"/>
												Visualizar boleto 
											</Link>
											
										) : (
											"-"
										)}
									</TableCell>
									<TableCell>
										 <EditServiceModal serviceId={service.id} /> 
									</TableCell>
									<TableCell>
										<Link href={`/services/${service.id}`} className="text-blue-500 underline">
											Detalhes
										</Link>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>

		</div>
	)
}

export default ServicesPageClient