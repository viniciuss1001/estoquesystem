"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMovementHistory } from "@/lib/queries"
import { useState } from "react"
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

export function MovementLineChart() {
	const [days, setDays] = useState(15)
	const { data = [] } = useMovementHistory(days)

	return (
		<Card className="w-1/3 bg-background">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Movimentações por tipo</CardTitle>
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
						<Line type="monotone" dataKey="IN" stroke="#22c55e" strokeWidth={2} />
						<Line type="monotone" dataKey="OUT" stroke="#f97316" strokeWidth={2} />
						<Line type="monotone" dataKey="TRANSFER" stroke="#3b82f6" strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}
