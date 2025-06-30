"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarClock, CalendarSearch, Menu } from "lucide-react"
import { ReactNode, useState } from "react"

interface AsideSheetProps {
	children: ReactNode
}

const AsideSheet = ({ children }: AsideSheetProps) => {

	const [open, setOpen] = useState<boolean>(true)

	return (
		<div className="fixed top-4 right-4 z-50 ">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" aria-label="Abrir painel lateral"
						className="cursor-pointer"
					>
						<Menu className="size-5" />
					</Button>
				</SheetTrigger>

				<SheetContent
					side="right"
					className="w-full sm:max-w-sm md:max-w-md lg: max-w-lg overflow-y-auto flex flex-col gap-2"
				>
					<div className="flex flex-col items-start mb-4 mt-6 mr-auto p-2 pl-6 gap-2">
						<h2 className="text-xl font-semibold flex gap-2">
							<CalendarSearch className="size-6" />
							Painel de Monitoramento
						</h2>

						<p className="text-sm text-muted-foreground flex gap-2">
							<CalendarClock className="size-4" />
							Monitoramento dos próximos acontecimentos
						</p>

					</div>

					<div className="flex flex-col gap-4 pt-2 pl-6">
						{children}
					</div>

				</SheetContent>
			</Sheet>
		</div>
	)
}

export default AsideSheet