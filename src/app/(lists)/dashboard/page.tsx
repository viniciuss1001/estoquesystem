"use client"

import DashboardCard from "@/components/pages/dashboard/DashboardCard"
import LateDeliveries from "@/components/pages/dashboard/LateDeliveries"
import LowStockProduct from "@/components/pages/dashboard/LowStockProduct"
import OverdueInvoices from "@/components/pages/dashboard/OverdueInvoices"
import RecentStockMovement from "@/components/pages/dashboard/RecentStockMovement"
import UpcomingDeliveries from "@/components/pages/dashboard/UpcomingDeliveries"
import { useActiveUsers, useOverdueInvoices, useTotalProducts, useTotalWarehouses } from "@/lib/queries"
import { FileWarning, Package, Users, Warehouse } from "lucide-react"

const DashboardPage = () => {

  const { data: totalProducts = [] } = useTotalProducts()
  const { data: totalWarehouses } = useTotalWarehouses()
  const { data: activeUsers } = useActiveUsers()
  const { data: overdueInvoices } = useOverdueInvoices()

  console.log(activeUsers)

  return (
    <div className="flex flex-col min-h-screen w-full space-y-8 px-6 py-8">
      {/* title */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Visão Geral</h2>

        {/* resume cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Produtos"
            value={totalProducts}
            icon={Package}
            color="blue"
          />
          <DashboardCard
            title="Armazéns"
            value={totalWarehouses}
            icon={Warehouse}
            color="green"
          />
          <DashboardCard
            title="Usuários Ativos"
            value={activeUsers}
            icon={Users}
            color="default"
          />
          <DashboardCard
            title="Boletos Vencidos"
            value={overdueInvoices?.length ?? 0}
            icon={FileWarning}
            color="red"
          />
        </div>
      </div>

      {/* movments and invoices */}
      <div className="flex gap-3 justify-between">
        <div className="w-2/5">

        <RecentStockMovement />
        </div>

        <div className="w-full p-0">
          <div className="flex items-start justify-around gap-2  h-1/2 w-full pl-6 pr-6">
          <OverdueInvoices />

        </div>
        <div className="flex items-start justify-around gap-2  h-1/2 w-full pl-6 pr-6">
          <UpcomingDeliveries />

          <LateDeliveries />
          <LowStockProduct />
        </div>
      </div>
        </div>

    </div>
  )
}

export default DashboardPage