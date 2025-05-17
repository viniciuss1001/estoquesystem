import React from 'react'
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { Home, Package, RefreshCw, Settings, Truck, Users } from 'lucide-react'
import Link from 'next/link'

const navItems = [
	{ label: "Dashboard", icon: Home, href: "/dashboard" },
	{ label: "Produtos", icon: Package, href: "/products" },
	{ label: "Movimentações", icon: RefreshCw, href: "/movements" },
	{ label: "Fornecedores", icon: Truck, href: "/suppliers" },
	{ label: "Usuários", icon: Users, href: "/users" },
	{ label: "Configurações", icon: Settings, href: "/settings" },
]

const SidebarComponent = () => {
	return (
		<Sidebar className='flex items-center gap-4 mt-3'>
			<SidebarHeader className='h-15 pt-6'>
				<h2>
					EstoqueSystem
				</h2>
			</SidebarHeader>
			<SidebarContent className='space-y-2 pl-3 '>
				{navItems.map((item) => (
					<Link key={item.href} href={item.href}>
						<div className=' flex items-center gap-2 px-3 py-2 rounded-lg hover:shadow-lg transition'>
							<item.icon className='size-5 ' />
							<span className='font-light text-sm'>
								{item.label}
							</span>
						</div>
					</Link>
				))}
			</SidebarContent>

		</Sidebar>
	)
}

export default SidebarComponent