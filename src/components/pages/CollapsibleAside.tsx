"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"

const CollapsibleAside = ({ children }: { children: ReactNode }) => {

	const [open, setOpen] = useState<boolean>(true)

	return (
		<aside
			className={`flex flex-col border-l bg-card dark:border-card/50 dark:bg-card/50 rounded-sm mt-4 mb-4 p-2 transition-all duration-300 ease-in-out ${open ? "w-1/4 p-4" : "w-12"
				} overflow-hidden`}>
			<Button
				variant='ghost'
				aria-label={open ? "Fechar painel lateral" : "Abrir painel lateral"}
				className="self-end mb-4 p-1 cursor-pointer rounded-md"
				onClick={() => setOpen(!open)}
			>
				{open ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
			</Button>

			{open &&
				<div className="flex flex-col gap-4">
					{children}
				</div>
			}
		</aside>
	)
}

export default CollapsibleAside