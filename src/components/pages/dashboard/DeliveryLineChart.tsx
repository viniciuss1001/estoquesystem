"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDeliveryHistory } from "@/lib/queries"
import { useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const DeliveryLineChart = () => {
	const [days, setDays] = useState(15)
	const { data = [], isLoading } = useDeliveryHistory(days)



	return (
		<Card className="w-1/3">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Últimas e Próximas Entregas</CardTitle>
				<Select value={String(days)} onValueChange={(v) => setDays(Number(v))}>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Dias" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="15">15 dias</SelectItem>
						<SelectItem value="30">30 dias</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent className="h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" />
						<YAxis allowDecimals={false} />
						<Tooltip />
						<Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}

export default DeliveryLineChart