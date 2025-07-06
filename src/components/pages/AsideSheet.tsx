"use client"

import { LogoutButton } from "@/components/shared/logout-button"
import SearchInput from "@/components/shared/SearchInput"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarClock, CalendarSearch, User } from "lucide-react"
import { useSession } from "next-auth/react"
import { ReactNode, useState } from "react"

interface AsideSheetProps {
	children: ReactNode
}

const AsideSheet = ({ children }: AsideSheetProps) => {
	const { data: session } = useSession()

	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className="z-50 ">
			<Sheet open={open} onOpenChange={setOpen} >
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" aria-label="Abrir painel lateral"
						className="cursor-pointer"
					>
						<User className="size-5" />
					</Button>
				</SheetTrigger>

				<SheetContent
					side="right"
					className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg overflow-y-auto flex flex-col gap-2 p-6"
				>
					{/* user */}
					<div className="p-2 w-full mr-auto flex gap-2  items-center">
						<Card className=" gap-2 border-none shadow-none w-full items-start justify-start bg-background p-2">
							<span className="flex gap-2 items-center justify-between">
								<Avatar className="w-15 h-15">
									<AvatarFallback className="text-xl">
										{session?.user.name.split(" ").map((n) => n[0]).join("").toUpperCase() ?? "-"}
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-2 items-start ml-2">

									<CardTitle className="text-lg">
										{session?.user.name}
									</CardTitle>

									<CardDescription>
										{session?.user.office}
									</CardDescription>
								</div>
							</span>
						</Card>
						<LogoutButton />
					</div>
					<Separator  className="mb-2 rounded-full "/>
					<div className="ml-6">
						<SearchInput />
					</div>

					<Separator className="mb-2 rounded-full"/>

					<div className="flex flex-col items-start mb-2 mr-auto p-2 pl-6 gap-2">
						<h2 className="text-xl font-semibold flex gap-2">
							<CalendarSearch className="size-6" />
							Painel de Monitoramento
						</h2>

						<p className="text-sm text-muted-foreground flex gap-2">
							<CalendarClock className="size-4" />
							Monitoramento dos próximos acontecimentos
						</p>

					</div>


					<div className="flex flex-col gap-4 pt-1 pl-6">
						{children}
					</div>

				</SheetContent>
			</Sheet>
		</div>
	)
}

export default AsideSheet