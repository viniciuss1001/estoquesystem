"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"
import { useState } from "react"

interface UseFilterDialogProps {
	onFilter: (office: "ADMIN" | "GESTOR" | undefined) => void
}

const UserFilterDialog = ({ onFilter }: UseFilterDialogProps) => {

	const [selectedRole, setSelectedRole] = useState<"ADMIN" | "GESTOR" | "">("")
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="cursor-pointer flex gap-1">
					<Filter className="size-4" />
					Filtros
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[400px]">
				<div className="flex flex-col gap-4">
					<DialogTitle className="text-xl font-semibold">Filtros de Usuários</DialogTitle>

					<Select value={selectedRole} onValueChange={(v) => setSelectedRole(v as any)}>
						<SelectTrigger>
							<SelectValue placeholder="Cargo" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="ADMIN">Admin</SelectItem>
							<SelectItem value="GESTOR">Gestor</SelectItem>
						</SelectContent>
					</Select>

					<DialogFooter className="flex gap-2 items-center justify-end">
						<Button onClick={() => onFilter(selectedRole || undefined)}>
							Aplicar filtros
						</Button>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default UserFilterDialog