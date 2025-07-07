"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLowStockProducts } from "@/lib/queries"
import clsx from "clsx"
import { AlertCircle, AlertTriangle, Loader2 } from "lucide-react"
import Link from "next/link"



const LowStockAlert = () => {

	const { data = [], isLoading, isError } = useLowStockProducts()

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
			</div>
		)
	}

	if (isError) {
		return <p className="text-red-600">Erro ao carregar alertas</p>
	}

	return (
		<Accordion type="single" collapsible className=" bg-background rounded-md  max-w-sm">
			<AccordionItem value="lowstock-item">
				<AccordionTrigger>
					<h3 className="flex items-center font-semibold mb-3">
						<AlertTriangle className="w-5 h-5 mr-2" />
						Produtos com Estoque Baixo
					</h3>

				</AccordionTrigger>
				<AccordionContent>
					{!data || data.length === 0 && (
						<p className="text-green-600">Nenhum produto com estoque baixo.</p>
					)}

					<ul className="space-y-2 max-h-64 overflow-y-auto">
						{data.map((product) => (
							<li
								key={product.id}
								className={clsx(
									"flex justify-between items-center p-2 rounded",
									product.quantity <= 0
										? "bg-red-100 text-red-900 font-bold"
										: "bg-yellow-100 text-yellow-900"
								)}
							>
								<Link href={`/products/${product.id}`} className="flex gap-1 items-center">
								<AlertCircle className="size-5 mr-1"/>
									<span>{product.name}</span>
								</Link>
								<span>
									{product.quantity} / {product.minimumStock ?? 0}
								</span>
							</li>
						))}
					</ul>
				</AccordionContent>

			</AccordionItem>

		</Accordion>
	)
}

export default LowStockAlert