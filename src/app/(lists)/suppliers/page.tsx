"use client"

import CreateSupplierModal from "@/components/pages/supplier/create-supplier-modal"
import EditSupplierModal from "@/components/pages/supplier/edit-supplier-modal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Supplier {
	id: string,
	name: string
	email: string
	contactPhone: string
	deliveryTime: string
	description?: string
}

const SupplierPage = () => {
	const [suppliers, setSuppliers] = useState<Supplier[]>([])

	useEffect(() => {
		api
			.get("/supplier")
			.then((response) => {
				setSuppliers(response.data.suppliers)
			})
			.catch(() => {
				toast.error("Erro ao carregar os fornecedores.")
			})
	}, [])

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-4">
			<h2 className="text-2xl font-bold mb-6">Lista de Fornecedores</h2>
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