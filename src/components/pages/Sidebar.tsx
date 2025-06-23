"use client"
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { Archive, Home, icons, List, Package, Package2, RefreshCw, Settings, Timer, Truck, Users, Warehouse } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo-rbg.png'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const SidebarComponent = () => {
	const { data: session } = useSession()
	const pathName = usePathname()
	const userId = session?.user.id

	const navItems = [
		{ label: "Dashboard", icon: Home, href: "/dashboard" },
		{ label: "Produtos", icon: Package, href: "/products" },
		{ label: "Fornecedores", icon: Truck, href: "/suppliers" },
		{ label: "Armazéns", icon: Warehouse, href: "/warehouses" },
		{ label: "Entregas", icon: Package2, href: "/delivery" },
		{ label: "Movimentações", icon: RefreshCw, href: "/movements" },
		{ label: "Produtos e Armazém", icon: Archive, href: "/warehouse-product" },
		{ label: "Categorias", icon: List, href: "/categories" },
		{ label: "Histórico", icon: Timer, href: "/audit-log" },
		{ label: "Usuários", icon: Users, href: "/users" },
		{ label: "Configurações", icon: Settings, href: `/settings/${userId}` },
	]
	return (
		<Sidebar className='flex items-center gap-4 '>
			<SidebarHeader className='h-auto p-6 flex items-start justify-center '>
				<Link href='/'>
					<Image src={logo} alt='Stockly' width={128} height={64} className='bg-none' />
				</Link>
			</SidebarHeader>
			<SidebarContent className='space-y-2 pl-3 '>
				{navItems.map((item) => {
					const isActive = pathName.startsWith(item.href)

					return (
						<Link key={item.href} href={item.href}>
							<div className={clsx('flex items-center gap-2 px-3 py-2 rounded-sm hover:shadow-lg transition',
								isActive
									? 'bg-blue-500/80 text-white font-medium shadow-inner'
									: 'hover:bg-muted hover:shadow-md text-muted-foreground'
							)}>
								<item.icon className='size-5 ' />
								<span className='font-light text-sm'>
									{item.label}
								</span>
							</div>
						</Link>
					)
				})}
			</SidebarContent>

		</Sidebar>
	)
}

export default SidebarComponent