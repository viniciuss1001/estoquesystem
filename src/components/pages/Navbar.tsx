"use client"

import {
	Menubar
} from "@/components/ui/menubar"

import CreatorGenericModal from "@/components/shared/More-creator-modal"
import NotificationComponent from "@/components/shared/NotificationComponent"
import { ModeThemeToggle } from "@/components/shared/theme-toggle"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

import AsideSheet from "@/components/pages/AsideSheet"
import DeliveryCalendarAside from "@/components/pages/DeliveryCalendarAside"
import LowStockAlert from "@/components/pages/LowStockAlert"
import { useSession } from "next-auth/react"

const NavbarComponents = () => {
	const { data: session } = useSession()

	return (
		<Menubar className="w-full p-4 border-b flex items-center justify-between bg-background shadow-sm h-20">
			{/* Left section: menu + greeting */}
			<div className="flex items-center gap-4 w-3/4 ">
				<Button variant="ghost" size="icon">
					<SidebarTrigger className="size-5" />
				</Button>

				<div className="text-sm hidden md:block  w-full ">
					<div className="flex items-center gap-2 justify-start">

						<p className="font-medium text-lg">Bem-vindo,</p>
						<span className="font-medium text-foreground text-lg">{session?.user.name}</span>
					</div>
				</div>
			</div>

			{/* Right section: actions */}
			<div className="flex items-center gap-3 ">
				<CreatorGenericModal />
				<NotificationComponent />
				<ModeThemeToggle />

				<AsideSheet>
					<DeliveryCalendarAside />
					<LowStockAlert />
				</AsideSheet>

			</div>
		</Menubar>
	)
}

export default NavbarComponents
