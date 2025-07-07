"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLowStockProducts } from "@/lib/queries"
import { Loader2, PackageMinus } from "lucide-react"

const LowStockProduct = () => {

	const { data, isLoading } = useLowStockProducts()

	return (
		<Card className="col-span-1 sm:col-span-2 lg:col-span-3 min-w-[350px] w-fit h-fit min-h-[200px] transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-background">
			<CardHeader>
				<CardTitle className="text-lg">
					Produtos com Estoque Baixo
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<div className="flex items-center justify-center py-6 text-muted-foreground">
						<Loader2 className="animate-spin w-5 h-5 mr-2" />
						Carregando produtos...
					</div>
				) : data && data.length > 0 ? (
					<ul className="space-y-4">
						{data.map((product) => (
							<li key={product.id} className="flex items-start justify-between">
								<div className="flex items-center gap-2">
									<PackageMinus className="w-4 h-4 text-yellow-500" />
									<span className="font-medium">{product.name}</span>
									<Badge variant="outline" className="border-yellow-500 text-yellow-700">
										{product.quantity} un.
									</Badge>
								</div>
								{product.minimumStock != null && (
									<span className="text-xs text-muted-foreground">
										Mínimo: {product.minimumStock} un.
									</span>
								)}
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-muted-foreground">Nenhum produto com estoque baixo.</p>
				)}
			</CardContent>
		</Card>
	)
}

export default LowStockProduct