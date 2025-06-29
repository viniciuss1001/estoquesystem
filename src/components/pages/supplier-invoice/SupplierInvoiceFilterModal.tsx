"use client"

import DateRangePicker from "@/components/shared/DateRangePicker"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSuppliers } from "@/lib/queries"
import { parse } from "date-fns"
import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { DateRange } from "react-day-picker"

const statusOptions = [
	{ value: "PENDING", label: "Pendente" },
	{ value: "PAID", label: "Pago" },
	{ value: "CANCELED", label: "Cancelado" },
]


const SupplierInvoiceFilterModal = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	// local state
	const [supplierId, setSupplierId] = useState<string | undefined>(
		searchParams.get("supplierId") || undefined
	)
	const [status, setStatus] = useState<string | undefined>(
		searchParams.get("status") || undefined
	)
	const [dueDate, setDueDate] = useState<DateRange | undefined>(() => {
	const from = searchParams.get("dueDateFrom")
	const to = searchParams.get("dueDateTo")
	if (from && to) {
		return {
			from: parse(from, "yyyy-MM-dd", new Date()),
			to: parse(to, "yyyy-MM-dd", new Date()),
		}
	}
	return undefined
})

	const { data: suppliers = [] } = useSuppliers()

	const hasFilters = supplierId || status || dueDate

	const applyFilters = () => {
		const params = new URLSearchParams()

		if (supplierId) params.set("supplierId", supplierId)
		if (status) params.set("status", status)
		if (dueDate?.from) {
	params.set("dueDateFrom", dueDate.from.toISOString().split("T")[0])
}
if (dueDate?.to) {
	params.set("dueDateTo", dueDate.to.toISOString().split("T")[0])
}

		startTransition(() => router.push(`?${params.toString()}`))
	}

	const clearFilters = () => {
		setSupplierId(undefined)
		setStatus(undefined)
		setDueDate(undefined)

		startTransition(() => router.push(window.location.pathname))
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={hasFilters ? "default" : "ghost"}
					className="flex items-center gap-2 justify-center cursor-pointer"
					disabled={isPending}
				>
					<Filter className="w-4 h-4" />
					{hasFilters ? "Filtros (ativos)" : "Filtros"}
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Filtrar Boletos</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2 w-full">
          <Select value={supplierId} onValueChange={setSupplierId}>
            <SelectTrigger>
              <SelectValue placeholder="Fornecedor" />
            </SelectTrigger>
            <SelectContent>
              {suppliers.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <DateRangePicker 
			 date={dueDate}
			 onChange={setDueDate}
			 placeholder="Data de Vencimento"
			 />

        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button
            variant="destructive"
            onClick={clearFilters}
            disabled={!hasFilters}
          >
            Limpar filtros
          </Button>
          <Button onClick={applyFilters} disabled={isPending}>
            Aplicar filtros
          </Button>
        </DialogFooter>
      </DialogContent>
		</Dialog>
	)
}

export default SupplierInvoiceFilterModal