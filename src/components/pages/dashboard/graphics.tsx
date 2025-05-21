"use client"

import { useEffect, useState } from "react"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from "recharts"
import api from "@/lib/axios"
import { toast } from "sonner"

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

      
      <div className="bg-background rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Movimentações ao longo do tempo (exemplo)</h2>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={[
              { date: "2025-05-01", movements: 5 },
              { date: "2025-05-02", movements: 8 },
              { date: "2025-05-03", movements: 6 },
              { date: "2025-05-04", movements: 10 },
              { date: "2025-05-05", movements: 7 },
            ]}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="movements" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
