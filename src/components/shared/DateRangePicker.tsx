"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

interface DateRangePickerProps {
  date: DateRange | undefined
  onChange: (range: DateRange | undefined) => void
  placeholder?: string
  className?: string
}

const DateRangePicker = ({ date, onChange, placeholder = "Selecionar intervalo", className }: DateRangePickerProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (range: DateRange | undefined) => {
    onChange(range)
    setOpen(false) // fecha o sheet após selecionar
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen} >
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yyyy")} - {format(date.to, "dd/MM/yyyy")}
                </>
              ) : (
                format(date.from, "dd/MM/yyyy")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-auto ml-auto mr-auto flex items-center rounded-sm p-2 justify-center w-[450px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Selecione um intervalo</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <Calendar
              locale={ptBR}
              mode="range"
              numberOfMonths={2}
              selected={date}
              onSelect={handleSelect}
              initialFocus
              className="rounded-md border"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default DateRangePicker