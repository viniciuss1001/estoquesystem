"use client"

import { useEffect, useState } from "react"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from "recharts"
import api from "@/lib/axios"
import { toast } from "sonner"
import MainLayoutDashboard from "../Main"
import SidebarComponent from "../Sidebar"

interface DashboardData {
  totalProducts: number
  totalMovements: number
  lowStockCount: number
  upcomingDeliveries: number
}

export default function DashboardGraph() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/dashboard")
        setData(response.data)
      } catch (error) {
        toast.error("Erro ao carregar dados do dashboard")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (!data) return <div>Sem dados disponíveis</div>

  // Preparar dados para gráficos (exemplo barras)
  const summaryData = [
    { name: "Produtos", value: data.totalProducts },
    { name: "Movimentações", value: data.totalMovements },
    { name: "Estoque baixo", value: data.lowStockCount },
    { name: "Próximas entregas", value: data.upcomingDeliveries },
  ]

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="bg-background rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Resumo Geral</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={summaryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
