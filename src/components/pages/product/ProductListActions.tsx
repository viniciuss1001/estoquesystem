"use client"

import { Button } from '@/components/ui/button'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Download, Printer } from 'lucide-react'


interface Product {
	id: string
	name: string
	sku: string
	quantity: string
	price: number
	category?: {
		id: string
		name: string
		createdAt: string
		updatedAt: string
	}
	createdAt: string
	updatedAt: string
	supplier: {
		id: string
		name: string
	}
	usageStatus?: "IN_STOCK" | "IN_USE" | "CONSUMED"
	expirationDate?: string | null
}

interface ProductListActionsProps {
	products: Product[]
}

const ProductListActions = ({ products }: ProductListActionsProps) => {

	const handlePrint = () => {
		window.print()
	}

	const handleExportPDF = () => {
		const document = new jsPDF()

		document.setFontSize(12)
		document.text("Lista de Produtos", 14, 22)

		autoTable(document, {
			startY: 30,
			head: [
				["Nome", "SKU", "Categoria", "Fornecedor", "Qtd", "Preço", "Estado", "Validade"]
			],
			body: products.map((p) => [
				p.name,
				p.sku,
				p.category?.name ?? "-",
				p.supplier?.name ?? "-",
				p.quantity,
				`R$ ${p.price.toFixed(2)}`,
				formatUsageStatus(p.usageStatus),
				p.expirationDate ? formatDate(p.expirationDate) : "-"
			]),
			styles: { fontSize: 9 },
			headStyles: { fillColor: [59, 130, 246] }, // azul
		})


		document.save("produtos_completos.pdf")
	}

	const formatUsageStatus = (status: string | null | undefined) => {
		switch (status) {
			case "IN_STOCK":
				return "Em estoque"
			case "IN_USE":
				return "Em uso"
			case "CONSUMED":
				return "Consumido"
			default:
				return "-"
		}
	}

	const formatDate = (dateString: string | Date) => {
		const date = new Date(dateString)
		return date.toLocaleDateString("pt-BR")
	}

	return (
		<div className="flex gap-2 mb-4 print:hidden">
			<Button onClick={handlePrint} variant="outline">
				<Printer className="w-4 h-4 mr-2" />
				Imprimir Página
			</Button>
			<Button onClick={handleExportPDF}>
				<Download className="w-4 h-4 mr-2" />
				Exportar PDF
			</Button>
		</div>
	)
}

export default ProductListActions