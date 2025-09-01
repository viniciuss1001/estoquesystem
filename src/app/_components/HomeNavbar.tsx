import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ChartBar } from "lucide-react"

const HomeNavbar = () => {
	return (
		<header className="w-full h-fit bg-background shadow-md sticky mt-4 z-50 pb-3">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">

					{/* Logo */}
					<div className="flex-shrink-0 mt-4">
						<Link href="/" className="text-2xl font-bold">
							<ChartBar className="w-full h-full" />
						</Link>
					</div>

					<nav className="hidden md:flex space-x-6">
						<Link href="#features" className="text-gray-500 hover:text-blue-500 transition">
							Funcionalidades
						</Link>
						<Link href="#tecnologias" className="text-gray-500 hover:text-blue-500 transition">
							Tecnologias
						</Link>
						<Link href="#dashboard" className="text-gray-500 hover:text-blue-500 transition">
							Dashboard
						</Link>
					</nav>


					<div className="flex items-center space-x-4">
						<Link href="/login">
							<Button variant="ghost" className="cursor-pointer">
								Login
							</Button>
						</Link>
						<Link href="/register">
							<Button variant="default" className="cursor-pointer">
								Registrar
							</Button>
						</Link>
					</div>

					{/* Menu Mobile */}
					<div className="md:hidden">

					</div>
				</div>
			</div>
		</header>
	)
}

export default HomeNavbar