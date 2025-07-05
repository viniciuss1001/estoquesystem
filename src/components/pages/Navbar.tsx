"use client"

import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
} from "@/components/ui/menubar"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeThemeToggle } from "../shared/theme-toggle"
import CreatorGenericModal from "../shared/More-creator-modal"
import NotificationComponent from "../shared/notify"
import { LogoutButton } from "../shared/logout-button"

import { useSession } from "next-auth/react"
import {
	User,
	Mail,
	UserLock,
	Menu,
} from "lucide-react"

const NavbarComponents = () => {
	const { data: session } = useSession()

	return (
		<Menubar className="w-full p-4 border-b flex items-center justify-between bg-background shadow-sm h-20">
			{/* Left section: menu + greeting */}
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon">
					<SidebarTrigger className="size-5" />
				</Button>

				<div className="text-sm text-muted-foreground hidden md:block">
					<p className="font-medium">Bem-vindo,</p>
					<p className="font-semibold text-foreground">{session?.user.name}</p>
				</div>
			</div>

			{/* Right section: actions */}
			<div className="flex items-center gap-3">
				<CreatorGenericModal />
				<NotificationComponent />
				<ModeThemeToggle />

				{/* User menu */}
				<MenubarMenu>
					<MenubarTrigger asChild>
						<Button variant="ghost" size="icon">
							<User className="size-5" />
						</Button>
					</MenubarTrigger>
					<MenubarContent className="z-50 w-72 p-0 border-none">
						<Card>
							<CardContent className="pt-4 pb-2 space-y-3 border-none">
								<div className="flex items-center gap-2">
									<User className="size-4 text-muted-foreground" />
									<span className="text-sm">{session?.user.name}</span>
								</div>
								<div className="flex items-center gap-2">
									<Mail className="size-4 text-muted-foreground" />
									<span className="text-sm">{session?.user.email}</span>
								</div>
								<div className="flex items-center gap-2 bg-blue-100 text-blue-900 rounded-md px-3 py-2">
									<UserLock className="size-4" />
									<span className="text-sm">{session?.user.office}</span>
								</div>
							</CardContent>
							<CardFooter className="pt-0">
								<LogoutButton />
							</CardFooter>
						</Card>
					</MenubarContent>
				</MenubarMenu>
			</div>
		</Menubar>
	)
}

export default NavbarComponents
