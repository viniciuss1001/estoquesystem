"use client"

import { useServiceProviders } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import CreateServiceProviderForm from "./_components/CreateServiceProviderForm"
import EditServiceProviderForm from "./_components/EditServiceProviderForm"


const ServiceProvidersPage = () => {
	const { data: serviceProviders = [], isLoading } = useServiceProviders()

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
			</div>
		)
	}

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-4">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold ">Lista de Prestadores de Serviço</h2>
					<p className="text-sm text-muted-foreground">
						Total de {serviceProviders.length} prestador (es) sendo exibidos.
					</p>
				</div>
				<CreateServiceProviderForm />
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>CNPJ</TableHead>
						<TableHead>Telefone</TableHead>
						<TableHead>Descrição</TableHead>
						<TableHead>Criado em</TableHead>
						<TableHead>Ações</TableHead>
						<TableHead>Detalhes</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{serviceProviders.length === 0 && (
						<TableRow>
							<TableCell colSpan={8} className="text-center">
								Nenhum prestador encontrado.
							</TableCell>
						</TableRow>
					)}

					{serviceProviders.map((serviceProvider) => (
						<TableRow key={serviceProvider.id}>
							<TableCell>{serviceProvider.name}</TableCell>
							<TableCell>{serviceProvider.email}</TableCell>
							<TableCell>{serviceProvider.cnpj}</TableCell>
							<TableCell>{serviceProvider.phone}</TableCell>
							<TableCell>{serviceProvider.description || "-"}</TableCell>
							<TableCell>
								{new Date(serviceProvider.createdAt).toLocaleDateString()  ?? "-"}
							</TableCell>
							<TableCell>
								<EditServiceProviderForm serviceProviderId={serviceProvider.id}/>
							</TableCell>
							<TableCell>
								<Link href={`/service-providers/${serviceProvider.id}`}>
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

export default ServiceProvidersPage