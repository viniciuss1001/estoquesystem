import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Controller, useFormContext } from "react-hook-form"


const DatePicker = () => {
	const { control } = useFormContext()

	return (
		<Controller
			name="expirationDate"
			control={control}
			render={({ field }) => (
				<Popover modal={false}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full justify-start text-left font-normal"
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{field.value ? format(field.value, "dd/MM/yyyy") : <span>Escolher data</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar
							mode="single"
							selected={field.value}
							onSelect={field.onChange}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			)}

		/>



	)
}

export default DatePicker