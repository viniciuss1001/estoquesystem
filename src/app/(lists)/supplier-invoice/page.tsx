"use client"

import CreateSupplierInvoiceForm from "@/components/pages/supplier-invoice/CreateSupplierInvoiceForm"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { format, isValid } from "date-fns"

interface SupplierInvoice {
	id: string
	title: string
	amount: number
	status: "PENDING" | "PAID" | "CANCELED"
	dueDate: string
	createdAt: string
	supplier: {
		id: string
		name: string
	}
}

const statusColor = {
	PENDING: "bg-yellow-100 text-yellow-800",
	PAID: "bg-green-100 text-green-800",
	CANCELED: "bg-red-100 text-red-800",
}

const SupplierInvoicesPage = () => {
	const { data: invoices = [], isLoading } = useQuery<SupplierInvoice[]>({
		queryKey: ["supplierInvoices"],
		queryFn: async () => {
			const response = await api.get("/supplier-invoice")
			return response.data
		},
	})

	if (isLoading) {
		return <Skeleton className="h-40 w-full" />
	}



	return (
		<div className="p-6 w-full h-full">
			<div className="flex p-2">
				<h2 className="text-2xl font-bold mb-4">Boletos de Fornecedores</h2>
				<div className="flex ml-auto">
					<CreateSupplierInvoiceForm />
				</div>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Fornecedor</TableHead>
						<TableHead>Título</TableHead>
						<TableHead>Valor</TableHead>
						<TableHead>Vencimento</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Criado em</TableHead>
						<TableHead>Detalhes</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.length === 0 ? (
						<TableRow>
							<TableCell colSpan={7} className="text-center">
								Nenhum boleto registrado.
							</TableCell>
						</TableRow>
					) : (
						invoices.map((invoice) => (
							
								<TableRow key={invoice.id}>
									<TableCell>{invoice.supplier?.name || "-"}</TableCell>
									<TableCell>{invoice.title}</TableCell>
									<TableCell>R$ {Number(invoice.amount).toFixed(2) || "-"}</TableCell>
									<TableCell>
										{invoice.dueDate && isValid(new Date(invoice.dueDate))
											? format(new Date(invoice.dueDate), "dd/MM/yyyy")
											: "-"}
									</TableCell>
									<TableCell>
										<Badge className={statusColor[invoice.status]}>
											{invoice.status === "PENDING"
												? "Pendente"
												: invoice.status === "PAID"
													? "Pago"
													: "Cancelado"}
										</Badge>
									</TableCell>
									<TableCell>
										{invoice.createdAt ? format(new Date(invoice.createdAt), "dd/MM/yyyy") : "-"}
									</TableCell>
									<TableCell>
										<Link href={`/supplier-invoice/${invoice.id}`} className="text-blue-600 underline">
											Detalhes
										</Link>
									</TableCell>
								</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default SupplierInvoicesPage
