"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

type Item = {
	id: string
	name: string
}

interface ComboboxProps {
	items: Item[]
	selectedId?: string
	onChange: (id: string | undefined) => void
	placeholder?: string
}

const Combobox = ({ items, selectedId, onChange, placeholder }: ComboboxProps) => {

	const [open, setOpen] = useState(false)

	const selectedItem = items.find((item) => item.id === selectedId)

	return (
		<div>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" role="combobox"
						aria-expanded={open} className="w-[200px] justify-between"
					>
						{selectedItem?.name || placeholder}

						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandInput placeholder={`Buscar ${placeholder?.toLowerCase()}`} />
						<CommandEmpty>Nenhum item encontrado.</CommandEmpty>

						<CommandGroup>
							{items.map((item) => (
								<CommandItem
									key={item.id}
									value={item.name}
									onSelect={() => {
										onChange(item.id === selectedId ? undefined : item.id)
										setOpen(false)
									}}
								>
									<Check
										className={cn("mr-2 h-4 w-4", selectedId === item.id ? "opacity-100" : "opacity-0")}
									/>
									{item.name}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>

		</div>
	)
}

export default Combobox