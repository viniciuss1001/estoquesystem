"use client"

import CreateSupplierModal from "@/components/pages/supplier/create-supplier-modal"
import EditSupplierModal from "@/components/pages/supplier/edit-supplier-modal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useSuppliers } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const SupplierPage = () => {
	const { data: suppliers = [], isLoading } = useSuppliers()

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
				<h2 className="text-2xl font-bold ">Lista de Fornecedores</h2>
				<p className="text-sm text-muted-foreground">
					Total de {suppliers.length} fornecedor (es) sendo exibidos.
				</p>
				</div>
				<CreateSupplierModal />
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Telefone</TableHead>
						<TableHead>Prazo de Entrega</TableHead>
						<TableHead>Descrição</TableHead>
						<TableHead>Ações</TableHead>
						<TableHead>Detalhes</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{suppliers.length === 0 && (
						<TableRow>
							<TableCell colSpan={6} className="text-center">
								Nenhum fornecedor encontrado.
							</TableCell>
						</TableRow>
					)}

					{suppliers.map((supplier) => (
						<TableRow key={supplier.id}>
							<TableCell>{supplier.name}</TableCell>
							<TableCell>{supplier.email}</TableCell>
							<TableCell>{supplier.contactPhone}</TableCell>
							<TableCell>
								{new Date(supplier.deliveryTime).toLocaleDateString()}
							</TableCell>
							<TableCell>{supplier.description || "-"}</TableCell>
							<TableCell>
								<EditSupplierModal supplierId={supplier.id} />
							</TableCell>
							<TableCell>
								<Link href={`/suppliers/${supplier.id}`}>
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

export default SupplierPage