"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRecentMovements } from "@/lib/queries"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Loader2, MoveLeft, MoveRight, Repeat } from "lucide-react"


const RecentStockMovement = () => {

	const { data, isLoading } = useRecentMovements()

	const iconMap = {
		IN: <MoveRight className="w-4 h-4 text-green-500" />,
		OUT: <MoveLeft className="w-4 h-4 text-red-500" />,
		TRANSFER: <Repeat className="w-4 h-4 text-yellow-500" />,
	}

	const badgeMap = {
		IN: "bg-green-100 text-green-800",
		OUT: "bg-red-100 text-red-800",
		TRANSFER: "bg-yellow-100 text-yellow-800",
	}

	return (
		<Card className="col-span-1 sm:col-span-2 lg:col-span-3 w-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-background">
			<CardHeader>
				<CardTitle className="text-lg">Movimentações Recentes</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<div className="flex items-center justify-center py-6 text-muted-foreground">
						<Loader2 className="animate-spin w-5 h-5 mr-2" />
						Carregando movimentações...
					</div>
				) : data && data.length > 0 ? (
					<ul className="space-y-4">
						{data.map((movement) => (
							<li key={movement.id} className="flex items-start justify-between">
								<div className="space-y-1">
									<div className="flex items-center gap-2">
										{iconMap[movement.type]}
										<span className="font-medium">{movement.product.name}</span>
										<Badge className={badgeMap[movement.type]}>
											{movement.type === "IN"
												? "Entrada"
												: movement.type === "OUT"
													? "Saída"
													: "Transferência"}
										</Badge>
									</div>
									<div className="text-sm text-muted-foreground">
										{movement.quantity} unidade(s){" "}
										{movement.type === "TRANSFER" && movement.originWareHouse && movement.destinationWarehouse ? (
											<>de <strong>{movement.originWareHouse.name}</strong> para <strong>{movement.destinationWarehouse.name}</strong></>
										) : movement.originWareHouse ? (
											<>de <strong>{movement.originWareHouse.name}</strong></>
										) : movement.destinationWarehouse ? (
											<>para <strong>{movement.destinationWarehouse.name}</strong></>
										) : null}
									</div>
								</div>
								<span className="text-sm text-muted-foreground">
									{format(new Date(movement.createdAt), "dd/MM/yyyy HH:mm", { locale: ptBR })}
								</span>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-muted-foreground">Nenhuma movimentação recente encontrada.</p>
				)}
			</CardContent>
		</Card>
	)
}

export default RecentStockMovement