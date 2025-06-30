"use client"

import CreateSupplierInvoiceForm from "@/components/pages/supplier-invoice/CreateSupplierInvoiceForm"
import SupplierInvoiceFilterModal from "@/components/pages/supplier-invoice/SupplierInvoiceFilterModal"
import { Badge } from "@/components/ui/badge"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { useFilteredSupplierInvoices } from "@/lib/queries"
import { useQueryClient } from "@tanstack/react-query"
import { format, isValid, parse } from "date-fns"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"


const statusColor = {
	PENDING: "bg-yellow-100 text-yellow-800",
	PAID: "bg-green-100 text-green-800",
	CANCELED: "bg-red-100 text-red-800",
}

const SupplierInvoicesPage = () => {

	const queryClient = useQueryClient()
	const searchParams = useSearchParams()

	// verify status
	const validStatuses = ["PENDING", "PAID", "CANCELED"] as const
	const rawStatus = searchParams.get("status")
	const status = validStatuses.includes(rawStatus as any)
		? (rawStatus as typeof validStatuses[number])
		: undefined

	// supplier
	const supplierId = searchParams.get("supplierId") || undefined

	// duedate range
	const dueDateFromParam = searchParams.get("dueDateFrom")
	const dueDateToParam = searchParams.get("dueDateTo")
	const dueDateFrom = dueDateFromParam ? parse(dueDateFromParam, "yyyy-MM-dd", new Date()) : undefined
	const dueDateTo = dueDateToParam ? parse(dueDateToParam, "yyyy-MM-dd", new Date()) : undefined

	const { data: invoices = [], isLoading } = useFilteredSupplierInvoices({
		supplierId,
		status,
		dueDateFrom,
		dueDateTo
	})

	if (isLoading) {
		return (
			<div className="flex items-center justify-center w-full h-full">
				<Loader2 className="w-6 h-6 animate-spin" />
			</div>
		)
	}


	return (
		<div className="p-6 w-full h-full">
			<div className="flex p-2">
				<div className="flex flex-col">

					<h2 className="text-2xl font-bold mb-2">Boletos de Fornecedores</h2>

					{ invoices.length > 0 && (
						<p className="text-sm text-muted-foreground mb-4 ">Total de  {invoices.length} boleto (s) sendo exibidos.</p>
					)}
				</div>
				<div className="flex ml-auto justify-center items-center">
					<SupplierInvoiceFilterModal />
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
