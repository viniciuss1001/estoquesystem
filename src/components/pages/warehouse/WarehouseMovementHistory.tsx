"use client"

import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"

interface WarehouseMovementHistoryProps {
	warehouseId: string
}


const WarehouseMovementHistory = ({ warehouseId }: WarehouseMovementHistoryProps) => {

	const { data, isLoading } = useQuery({
		queryKey: ["warehouseMovements", warehouseId],
		queryFn: async () => {
			const response = await api.get(`/warehouse/${warehouseId}/movements`)

			if(!response) {
				throw new Error("Erro ao carregar movimentações.")
			}

			return response.data
		}
	})

	if(isLoading){
		return <Skeleton className="h-40 w-full"/>
	}

	if(!data || data.length === 0){
		return <p className="text-muted-foreground text-sm">Nenhuma movimentação encontrada.</p>
	}

	return (
		<div className="space-y-4">
      <h2 className="text-lg font-semibold">Histórico de Movimentações</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Antes → Depois</TableHead>
            <TableHead>Origem</TableHead>
            <TableHead>Destino</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((movement: any) => (
            <TableRow key={movement.id}>
              <TableCell>{movement.product?.name || "-"}</TableCell>
              <TableCell>
                <Badge variant="outline">{movement.type}</Badge>
              </TableCell>
              <TableCell>{movement.quantity}</TableCell>
              <TableCell>
                {movement.quantityBefore} → {movement.quantityAfter}
              </TableCell>
              <TableCell>{movement.originWarehouse?.name || "-"}</TableCell>
              <TableCell>{movement.destinationWarehouse?.name || "-"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    movement.status === "COMPLETED" ? "default" :
                    movement.status === "PENDING" ? "secondary" : "destructive"
                  }
                >
                  {movement.status}
                </Badge>
              </TableCell>
              <TableCell>{format(new Date(movement.createdAt), "dd/MM/yyyy HH:mm")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
	)
}

export default WarehouseMovementHistory