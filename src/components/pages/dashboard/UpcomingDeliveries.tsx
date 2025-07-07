"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useUpcomingDeliveries } from '@/lib/queries'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarClock, Loader2 } from 'lucide-react'

const UpcomingDeliveries = () => {

	const { data, isLoading } = useUpcomingDeliveries()

	return (
		<Card className="col-span-1 sm:col-span-2 lg:col-span-3 min-w-[350px] w-fit h-fit min-h-[200px] transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-background">
			<CardHeader>
				<CardTitle className="text-lg">
					Entregas Previstas
				</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<div className="flex items-center justify-center py-6 text-muted-foreground">
						<Loader2 className="animate-spin w-5 h-5 mr-2" />
						Carregando entregas previstas...
					</div>
				) : data && data.length > 0 ? (
					<ul className="space-y-4">
						{data.map((delivery) => (
							<li key={delivery.id} className="flex items-start justify-between">
								<div className="space-y-1">
									<div className="flex items-center gap-2">
										<CalendarClock className="w-4 h-4 text-primary" />
										<span className="font-medium">{delivery.product.name}</span>
										<Badge variant="default">{delivery.quantity} un.</Badge>
									</div>
									<div className="text-sm text-muted-foreground">
										Fornecedor: <strong>{delivery.supplier.name}</strong> — Prevista para{" "}
										{format(new Date(delivery.expectedAt), "dd/MM/yyyy", { locale: ptBR })}
									</div>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-muted-foreground">Nenhuma entrega prevista.</p>
				)}
			</CardContent>
		</Card>
	)
}

export default UpcomingDeliveries