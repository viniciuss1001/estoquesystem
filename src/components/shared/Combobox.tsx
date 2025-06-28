"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
	id: string
	name: string
}

interface ComboboxProps {
	items: Item[]
	placeholder?: string
	selectedId?: string
	onChange: (value: string | undefined) => void
}

const Combobox = ({ items, selectedId, onChange, placeholder }: ComboboxProps) => {
	const [open, setOpen] = useState(false)
	const [internalSelected, setInternalSelected] = useState<Item | undefined>(undefined)

	// Sempre que selectedId mudar (via props), atualiza o item selecionado
	useEffect(() => {
		const item = items.find((item) => item.id === selectedId)
		setInternalSelected(item)
	}, [selectedId, items])

	const handleSelect = (item: Item) => {
		const isSame = item.id === selectedId
		onChange(isSame ? undefined : item.id)
		setOpen(false)
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{internalSelected?.name || placeholder || "Selecionar"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={`Buscar ${placeholder?.toLowerCase()}...`} />
					<CommandEmpty>Nenhum item encontrado.</CommandEmpty>
					<CommandGroup>
						{items.map((item) => (
							<CommandItem
								key={item.id}
								value={item.name}
								onSelect={() => handleSelect(item)}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										selectedId === item.id ? "opacity-100" : "opacity-0"
									)}
								/>
								{item.name}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default Combobox
