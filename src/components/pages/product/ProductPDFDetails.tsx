"use client"

import { Button } from "@/components/ui/button"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import jsPDF from "jspdf"
import { Download } from "lucide-react"
import autoTable from "jspdf-autotable"

interface Movement {
	id: string
	type: string
	quantity: string
	createdAt: string
}

interface ProductWarehouse {
	id: string
	quantity: number
	warehouse: {
		id: string
		name: string
		location?: string
		quantity: string
	}
}

interface ProductPDFDetailsProps {
	productId: string
	productName: string
	userName?: string
	userRole?: string
}


const ProductPDFDetails = ({ productId, userName, userRole, productName }: ProductPDFDetailsProps) => {

	const { data: movements, isLoading: movementsLoading, isError: movementsError } = useQuery<Movement[]>({
		queryKey: ["product-movements-PDF", productId],
		queryFn: async () => {
			const response = await api.get(`/product/${productId}/movements`)
			return response.data
		}
	})

	const { data: warehouses, isLoading: warehouseLoading, isError: warehouseError } = useQuery<ProductWarehouse[]>({
		queryKey: ["product-warehouse-PDF", productId],
		queryFn: async () => {
			const response = await api.get(`/product/${productId}/warehouses`)
			return response.data
		}
	})

	const generatePDF = async () => {
		if (!warehouses || !movements) return

		const doc = new jsPDF()

		const logoUrl = "/logo-rbg.png"

		const getImageBase64 = (url: string): Promise<string> => {
			return new Promise((resolve, reject) => {
				const img = new Image()
				img.crossOrigin = "Anonymous"
				img.onload = () => {
					const canvas = document.createElement("canvas")
					canvas.width = img.width
					canvas.height = img.height
					const ctx = canvas.getContext("2d")
					if (!ctx) reject("Erro no contexto do canvas")
					ctx!.drawImage(img, 0, 0);
					const dataURL = canvas.toDataURL("image/png")
					resolve(dataURL)
				}
				img.onerror = (err) => reject(err)
				img.src = url
			})

		}

		let logoBase64 = ""

		try {
			logoBase64 = await getImageBase64(logoUrl)
		} catch (error) {
			console.log(error)
		}

		if (logoBase64) {
			doc.addImage(logoBase64, "PNG", 14, 10, 40, 15);
		}

		doc.setFontSize(18)
		doc.text("Detalhes do Produto", 60, 22)

		doc.setFontSize(14)
		doc.text("Movimentações:", 14, 40)

		const movementsRows = movements.map((movement) => [
			movement.id,
			movement.type,
			movement.quantity.toString(),
			new Date(movement.createdAt).toLocaleDateString(),
		]);

		autoTable(doc, {
			startY: 44,
			head: [["ID", "Tipo", "Quantidade", "Data"]],
			body: movementsRows,
		})

		const finalY = (doc as any).lastAutoTable.finalY + 10

		doc.setFontSize(14)
		doc.text("Armazéns com o produto:", 14, finalY)

		const warehouseRows = warehouses.map((w) => [
			w.warehouse.id,
			w.warehouse.name,
			w.warehouse.location || "-",
			String(w.quantity)
		])

		autoTable(doc, {
			startY: finalY + 4,
			head: [["ID", "Nome", "Localização", "Quantidade"]],
			body: warehouseRows,
			styles: { fontSize: 10 }
		})

		const pageHeight = doc.internal.pageSize.height
		const footerY = pageHeight - 15
		const dateTimeStr = new Date().toLocaleString()

		doc.setFontSize(10)
		doc.setTextColor(100)
		doc.text(
			`Exportado por: ${userName} (${userRole}) - ${dateTimeStr}`,
			14,
			footerY
		)

		doc.save(`produto_${productName}_detalhes.pdf`)

	}

	if (warehouseLoading || movementsLoading) {
		return <p>Carregando dados do produto</p>
	}

	if (warehouseError || movementsError) {
		return <p>Erro ao carregar os dados do produto.</p>
	}

	return (
		<div>
			<Button
				onClick={generatePDF}
				className="cursor-pointer" variant="outline"
			>
				<Download className="w-4 h-4" />
				<span className='hidden md:block'>
					Exportar PDF
				</span>
			</Button>
		</div>
	)
}

export default ProductPDFDetails