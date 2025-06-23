"use client"

import api from "@/lib/axios"
import { Delivery } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { isAfter, isSameDay, parseISO, format } from "date-fns"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, ChevronRight, ChevronsDown, Eye, Package, SeparatorHorizontal, Truck } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"


const DeliveryCalendarAside = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

	const { data: calendarDeliveries = [], isLoading, isError } = useQuery<Delivery[]>({
		queryKey: ['calendarDeliveries'],
		queryFn: async () => {
			const response = await api.get('/delivery')
			return response.data
		}
	})

	const futureDeliveries = calendarDeliveries.filter(delivery => isAfter(parseISO(delivery.expectedAt), new Date()))

	const deliveriesOnSelectedDate = futureDeliveries.filter(delivery => isSameDay(parseISO(delivery.expectedAt), selectedDate ?? new Date()))

	const deliveriesDates = futureDeliveries.map(delivery => format(parseISO(delivery.expectedAt), 'yyyy-MM-dd'))

	return (
		<aside className="w-full md:w-96 border-l border-gray-200 p-4 space-y-4">
			<h2 className="text-2xl font-bold p-2 flex gap-2">
				<ChevronsDown className="text-2xl text-blue-500 "/>

				Próximas Entregas
			</h2>
			<div className="flex items-center justify-center p-2">
				<Calendar
					mode="single"
					selected={selectedDate}
					onSelect={setSelectedDate}
					className="rounded-md border"
					modifiers={{
						hasDelivery: (date) => deliveriesDates.includes(format(date, "yyyy-MM-dd"))
					}}
					modifiersClassNames={{
						hasDelivery: "bg-blue-500/80 text-white hover:bg-blue-500/20"
					}}
				/>
			</div>
			<div className="space-y-2 ">
				<h2 className="text-sm font-semibold text-muted-foreground">
					Entregas em {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '...'}
				</h2>

				{isLoading && <p className="text-xs text-muted-foreground">Carregando entregas...</p>}
				{isError && <p className="text-xs text-red-500">Erro ao carregar entregas</p>}

				{!isLoading && deliveriesOnSelectedDate.length > 0 ? (
					deliveriesOnSelectedDate.map((delivery) => (
						<div
							key={delivery.id}
							className="p-4 rounded-xl border bg-muted/20 shadow-sm flex flex-col gap-2"
						>
							<Separator className="w-full rounded-full h-1 bg-blue-600"/>
							<div className="flex items-center gap-2">
								<Package className="w-4 h-4 text-primary" />
								<p className="text-base font-semibold text-foreground">
									{delivery.product.name}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<Truck className="w-4 h-4 text-muted-foreground" />
								<p className="text-sm text-muted-foreground">
									{delivery.supplier.name}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<CalendarDays className="w-4 h-4 text-muted-foreground" />
								<p className="text-sm text-muted-foreground">
									{format(parseISO(delivery.expectedAt), "dd/MM/yyyy")}
								</p>
							</div>

							<Link href={`/delivery/${delivery.id}`} className="flex gap-2 items-center justify-end">
							<ChevronRight className="w-4 h-4 text-blue-400"/>
							<p className="text-sm text-blue-400 undeline">Ver movimentação</p>
							</Link>
						</div>
					))
				) : (
					!isLoading && <p className="text-md border border-card rounded-md p-2">Nenhuma entrega nesta data.</p>
				)}
			</div>

		</aside>
	)
}

export default DeliveryCalendarAside