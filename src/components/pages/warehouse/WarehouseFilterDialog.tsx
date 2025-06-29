"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Filter } from "lucide-react"
import { useState } from "react"

interface WarehouseFilterDialogProps {
	onFilter: (location: string | undefined) => void
}

const WarehouseFilterDialog = ({ onFilter }: WarehouseFilterDialogProps) => {

	const [locationInput, setLocationInput] = useState("")

	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="ghost" className="cursor-pointer">
						<Filter className="size-4" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[400px]">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl font-semibold">Filtros de Armazéns</h2>
						<Input
							placeholder="Localização"
							value={locationInput}
							onChange={(e) => setLocationInput(e.target.value)}
						/>

						<DialogFooter className="flex gap-2 items-center justify-end">

							<Button
								onClick={() => onFilter(locationInput || undefined)}
								className="cursor-pointer"
							>
								Aplicar filtros
							</Button>
						</DialogFooter>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default WarehouseFilterDialog