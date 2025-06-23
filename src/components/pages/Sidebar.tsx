"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader
} from '@/components/ui/sidebar'
import {
  Archive,
  Home,
  List,
  Package,
  Package2,
  RefreshCw,
  Settings,
  Timer,
  Truck,
  Users,
  Warehouse
} from 'lucide-react'
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

  const groupedNav = [
    {
      title: "Visão Geral",
      items: [
        { label: "Dashboard", icon: Home, href: "/dashboard" }
      ]
    },
    {
      title: "Gestão de Estoque",
      items: [
        { label: "Produtos", icon: Package, href: "/products" },
        { label: "Categorias", icon: List, href: "/categories" },
        { label: "Armazéns", icon: Warehouse, href: "/warehouses" },
        { label: "Produtos e Armazém", icon: Archive, href: "/warehouse-product" }
      ]
    },
    {
      title: "Movimentações",
      items: [
        { label: "Movimentações", icon: RefreshCw, href: "/movements" },
        { label: "Entregas", icon: Package2, href: "/delivery" }
      ]
    },
    {
      title: "Relacionamentos",
      items: [
        { label: "Fornecedores", icon: Truck, href: "/suppliers" },
        { label: "Usuários", icon: Users, href: "/users" }
      ]
    },
    {
      title: "Sistema",
      items: [
        { label: "Histórico", icon: Timer, href: "/audit-log" },
        { label: "Configurações", icon: Settings, href: `/settings/${userId}` }
      ]
    }
  ]

  return (
    <Sidebar className="flex items-center gap-4">
      <SidebarHeader className="h-auto p-6 flex items-start justify-center">
        <Link href="/">
          <Image src={logo} alt="Stockly" width={128} height={64} className="bg-none" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="space-y-4 pl-3 pr-3 w-full">
        {groupedNav.map((group) => (
          <div key={group.title} className="space-y-1">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase px-2">
              {group.title}
            </h4>
            {group.items.map((item) => {
              const isActive = pathName.startsWith(item.href)
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={clsx(
                      'flex items-center gap-2 px-3 py-2 rounded-sm transition',
                      isActive
                        ? 'bg-blue-500/80 text-white font-medium shadow-inner'
                        : 'hover:bg-muted hover:shadow-md text-muted-foreground'
                    )}
                  >
                    <item.icon className="size-5" />
                    <span className="font-light text-sm">
                      {item.label}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

export default SidebarComponent
