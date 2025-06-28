"use client"

import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import api from "@/lib/axios"
import { Delivery, SupplierInvoice } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { format, isAfter, isSameDay, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarDays, ChevronRight, ChevronsDown, DollarSign, FileText, Package, Truck } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const DeliveryCalendarAside = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

	const { data: calendarDeliveries = [], isLoading, isError } = useQuery<Delivery[]>({
		queryKey: ['calendarDeliveries'],
		queryFn: async () => {
			const response = await api.get('/delivery')
			return response.data
		}
	})

	const { data: upcomingInvoices = [], isLoading: upcomingInvoicesLoading } = useQuery<SupplierInvoice[]>({
		queryKey: ["upcomingInvoices"],
		queryFn: async () => {
			const response = await api.get("/supplier-invoice/upcoming")
			return response.data
		}
	})

	const futureDeliveries = calendarDeliveries.filter(delivery => isAfter(parseISO(delivery.expectedAt), new Date()))

	// selected
	const deliveriesOnSelectedDate = futureDeliveries.filter(delivery => isSameDay(parseISO(delivery.expectedAt), selectedDate ?? new Date()))

	const invoicesOnSelectedDate = upcomingInvoices.filter(invoice => isSameDay(parseISO(invoice.dueDate), selectedDate ?? new Date()))

	// dates
	const deliveriesDates = futureDeliveries.map(delivery => format(parseISO(delivery.expectedAt), 'yyyy-MM-dd'))
	const invoiceDates = upcomingInvoices.map(invoice => format(parseISO(invoice.dueDate), "yyy-MM-dd"))

	const highlightedDates = [...new Set([...deliveriesDates, ...invoiceDates])]

	return (
		<div className="max-w-sm space-y-4">
			<h2 className="text-lg font-bold flex gap-2">
				<ChevronsDown className="text-xl text-blue-500 " />

				Próximos acontecimentos
			</h2>
			<div className="flex items-center justify-center p-2">
				<Calendar
					mode="single"
					selected={selectedDate}
					onSelect={setSelectedDate}
					className="rounded-md border"
					locale={ptBR}
					modifiers={{
						hasEvent: (date) => highlightedDates.includes(format(date, "yyyy-MM-dd"))
					}}
					modifiersClassNames={{
						hasEvent: "bg-blue-500/80 text-white hover:bg-blue-500/20"
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
							<Separator className="w-2 rounded-full h-1 bg-blue-600" />
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
								<ChevronRight className="w-4 h-4 text-blue-400" />
								<p className="text-sm text-blue-400 undeline">Ver entrega</p>
							</Link>
						</div>
					))
				) : (
					!isLoading && <p className="text-md border border-card rounded-md p-2">Nenhuma entrega nesta data.</p>
				)}
			</div>

			<div className=" space-y-2">
				<h2 className="text-sm font-semibold text-muted-foreground">
					Boletos em: {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '...'}
				</h2>

				{upcomingInvoicesLoading && <p className="text-xs text-muted-foreground">Carregando boletos...</p>}


				{!upcomingInvoicesLoading && invoicesOnSelectedDate.length > 0 ? (
					invoicesOnSelectedDate.map((invoice) => (
						<div
							key={invoice.id}
							className="p-4 rounded-xl border bg-muted/20 shadow-sm flex flex-col gap-2 dark:text-gray-400"
						>
							<Separator className="w-2 rounded-full h-1 bg-yellow-500" />
							<div className="flex items-center gap-2">
								<FileText className="w-4 h-4 " />
								<p className="text-base font-semibold ">
									{invoice.title}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<Truck className="w-4 h-4" />
								<p className="text-sm ">{invoice.supplier.name}</p>
							</div>

							<div className="flex items-center gap-2">
								<CalendarDays className="w-4 h-4 " />
								<p className="text-sm ">
									{format(parseISO(invoice.dueDate), "dd/MM/yyyy")}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<DollarSign className="w-4 h-4" />
								<p className="text-sm">
									{Number(invoice.amount).toFixed(2)} {" "}
								</p>
							</div>

							<Link href={`/supplier-invoice/${invoice.id}`} className="flex gap-2 items-center justify-end">
								<ChevronRight className="w-4 h-4 text-yellow-500" />
								<p className="text-sm text-yellow-500 ">Ver boleto</p>
							</Link>
						</div>
					))
				) : (
					!upcomingInvoicesLoading && <p className="text-md border border-card rounded-md p-2">Nenhuma pagamento nesta data.</p>
				)}
			</div>

		</div>
	)
}

export default DeliveryCalendarAside