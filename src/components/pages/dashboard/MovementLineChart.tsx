// src/components/charts/MovementsLineChart.tsx
"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useMovementsHistory } from "@/hooks/useMovementsHistory"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const MovementsLineChart = () => {
  const { data, isLoading } = useMovementsHistory()

  return (
    <Card className="w-1/4 sm:w-full">
      <CardHeader>
        <CardTitle>Histórico de Movimentações (últimos 6 meses)</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}

export default MovementsLineChart

