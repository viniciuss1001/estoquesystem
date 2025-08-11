"use client"

import DashboardCard from "@/app/(lists)/dashboard/_components/DashboardCard"
import DeliveryLineChart from "@/app/(lists)/dashboard/_components/DeliveryLineChart"
import LateDeliveries from "@/app/(lists)/dashboard/_components/LateDeliveries"
import LowStockProduct from "@/app/(lists)/dashboard/_components/LowStockProduct"
import { MovementLineChart } from "@/app/(lists)/dashboard/_components/MovementsLineChart"
import OverdueInvoices from "@/app/(lists)/dashboard/_components/OverdueInvoices"
import RecentStockMovement from "@/app/(lists)/dashboard/_components/RecentStockMovement"
import UpcomingDeliveries from "@/app/(lists)/dashboard/_components/UpcomingDeliveries"
import { useActiveUsers, useOverdueInvoices, useTotalProducts, useTotalWarehouses } from "@/lib/queries"
import { FileWarning, Package, Users, Warehouse } from "lucide-react"

const DashboardPage = () => {

  const { data: totalProducts } = useTotalProducts()
  const { data: totalWarehouses } = useTotalWarehouses()
  const { data: activeUsers = [] } = useActiveUsers()
  const { data: overdueInvoices = [] } = useOverdueInvoices()

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
            value={activeUsers.length}
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

      {/* movements and invoices */}
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

      {/* charts */}
      <div className=" gap-3 w-full p-1">
        <h2 className="text-2xl font-semibold mb-4">
          Histórico de Entregas e Movimentações
        </h2>
        <div className="flex gap-2 items-start w-full">

          <DeliveryLineChart />
          <MovementLineChart />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage