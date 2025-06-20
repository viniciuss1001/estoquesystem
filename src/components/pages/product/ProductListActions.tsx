"use client"

import { Button } from '@/components/ui/button'
import { Product } from '@/types/types'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Download, Printer } from 'lucide-react'


interface ProductListActionsProps {
	products: Product[]
	userName: string
	userNameOffice: string
}

const ProductListActions = ({ products, userName, userNameOffice }: ProductListActionsProps) => {

	const handlePrint = () => {
		window.print()
	}

	const handleExportPDF = async () => {
		const document = new jsPDF()

		// load logo
		const logoUrl = "/logo-rbg.png"
		const image = await getImageBase64(logoUrl)

		// header
		if (image) {
			document.addImage(image, "PNG", 14, 10, 25, 18)
		}

		document.setFontSize(10)
		document.text(`Gerador por: ${userName} (${userNameOffice})`, 14, 25)

		document.setFontSize(12)
		document.text("Lista de Produtos", 14, 35)

		autoTable(document, {
			startY: 40,
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

		// footer with date 
		const pageHeight = document.internal.pageSize.height
		const now = new Date()

		const formatted = now.toLocaleDateString("pt-BR")

		document.setFontSize(9)
		document.text(`Documento gerado em: ${formatted}`, 14, pageHeight - 10)

		document.save("produtos_completos.pdf")
	}

	const getImageBase64 = (url: string): Promise<string | null> => {
		return new Promise((resolve) => {
			const img = new Image()
			img.crossOrigin = "Anonymous"
			img.src = url

			img.onload = () => {
				const canvas = document.createElement("canvas")
				canvas.width = img.width
				canvas.height = img.height
				const ctx = canvas.getContext("2d")
				if (!ctx) return resolve(null)
				ctx.drawImage(img, 0, 0)
				resolve(canvas.toDataURL("image/png"))
			}

			img.onerror = () => resolve(null)
		})
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
			<Button onClick={handlePrint} variant="outline" className='cursor-pointer'>
				<Printer className="w-4 h-4" />
				<span className='hidden md:block'>Imprimir Página</span>
			</Button>
			<Button onClick={handleExportPDF} variant="outline" className='cursor-pointer'>
				<Download className="w-4 h-4" />
				<span className='hidden md:block'>
					Exportar PDF
				</span>
			</Button>
		</div>
	)
}

export default ProductListActions