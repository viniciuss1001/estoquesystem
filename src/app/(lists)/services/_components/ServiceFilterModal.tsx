"use client"

import DateRangePicker from "@/components/shared/DateRangePicker"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { useServiceLocations, useServiceProviders, useServiceTypes } from "@/lib/queries"
import { parse } from "date-fns"
import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { DateRange } from "react-day-picker"

const statusOptions = [
  { value: "PENDING", label: "Pendente" },
  { value: "COMPLETED", label: "Concluído" },
  { value: "CANCELED", label: "Cancelado" },
]


const ServiceFilterModal = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [open, setOpen] = useState(false)

  const [supplierId, setSupplierId] = useState<string | undefined>(
    searchParams.get("supplierId") || undefined
  )
  const [status, setStatus] = useState<string | undefined>(
    searchParams.get("status") || undefined
  )
  const [type, setType] = useState<string | undefined>(
    searchParams.get("type") || undefined
  )
  const [location, setLocation] = useState<string | undefined>(
    searchParams.get("location") || undefined
  )
  const [hasInvoice, setHasInvoice] = useState<string | undefined>(
    searchParams.get("hasInvoice") || undefined
  )
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const from = searchParams.get("dateFrom")
    const to = searchParams.get("dateTo")
    if (from && to) {
      return {
        from: parse(from, "yyyy-MM-dd", new Date()),
        to: parse(to, "yyyy-MM-dd", new Date())
      }
    }
    return undefined
  })

  const { data: serviceProviders = [] } = useServiceProviders()
  const { data: serviceTypes = [] } = useServiceTypes()
  const { data: serviceLocations = [] } = useServiceLocations()

  const hasFilters = supplierId || status || type || location || hasInvoice || dateRange

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (supplierId) params.set("supplierId", supplierId)
    if (status) params.set("status", status)
    if (type) params.set("type", type)
    if (location) params.set("location", location)
    if (hasInvoice) params.set("hasInvoice", hasInvoice)
    if (dateRange?.from) {
      params.set("dateFrom", dateRange.from.toISOString().split("T")[0])
    }
    if (dateRange?.to) {
      params.set("dateTo", dateRange.to.toISOString().split("T")[0])
    }

    startTransition(() => router.push(`?${params.toString()}`))
  }

  const clearFilters = () => {
    setSupplierId(undefined)
    setStatus(undefined)
    setType(undefined)
    setLocation(undefined)
    setHasInvoice(undefined)
    setDateRange(undefined)

    startTransition(() => router.push(window.location.pathname))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={hasFilters ? "default" : "ghost"}
          className="flex items-center gap-2 cursor-pointer"
          disabled={isPending}
        >
          <Filter className="w-4 h-4" />
          {hasFilters ? "Filtros (ativos)" : "Filtros"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Filtrar Serviços</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2 w-full">

          {/* service provider */}
          <Select value={supplierId} onValueChange={setSupplierId} >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Prestador" />
            </SelectTrigger>
            <SelectContent>
              {serviceProviders.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status */}
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full">
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

          {/* Tipo */}
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Tipo de Serviço" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((types) => (
                <SelectItem key={types.id} value={types.id}>
                  {types.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Local */}
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Local" />
            </SelectTrigger>
            <SelectContent>
              {serviceLocations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Faixa de datas */}
          <DateRangePicker
            date={dateRange}
            onChange={setDateRange}
            placeholder="Data do serviço"
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

export default ServiceFilterModal
