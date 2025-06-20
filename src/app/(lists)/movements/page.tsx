"use client"

import CreateMovementForm from '@/components/pages/movements/create-movement-form'
import { Badge } from "@/components/ui/badge"
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import api from '@/lib/axios'
import { Movement } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Repeat2 } from "lucide-react"
import Link from 'next/link'

const MovementsPage = () => {

  const { data: movements = [], isLoading } = useQuery({
    queryKey: ["movements"],
    queryFn: async () => {
      const response = await api.get('/movements')
      return response.data.movements as Movement[]
    }
  })

  const statusColor = {
    PENDING: "bg-yellow-100 text-yellow-800",
    COMPLETED: "bg-green-100 text-green-800",
    CANCELED: "bg-red-100 text-red-800",
  }

  if (isLoading) {
    return <Skeleton className="h-40 w-full" />
  }


  return (
    <div className='p-6 w-full h-full'>
      <div className='flex  p-2'>
        <h2 className="text-2xl font-bold mb-4">Histórico de Movimentações</h2>
        <div className='flex ml-auto'>
          <CreateMovementForm />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Origem</TableHead>
            <TableHead>Destino</TableHead>
            <TableHead>Observações</TableHead>
            <TableHead>Data</TableHead>
            {/* <TableHead>Ações</TableHead> */}
            <TableHead>Detalhes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movements.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Nenhuma movimentação registrada.
              </TableCell>
            </TableRow>
          ) : (
            movements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>
                  <Link href={`/products/${movement.product.id}`}>
                    {movement.product?.name ?? "-"}
                  </Link>
                </TableCell>
                <TableCell>
                  {/* type transfer */}
                  {movement.type === "TRANSFER" && (
                    <div className="flex items-center gap-1">
                      <Repeat2 className="w-4 h-4 text-blue-600" />
                      <span>Transferência</span>
                    </div>
                  )}

                  {/* type in */}
                  {movement.type === "IN" && (
                    <div className="flex items-center gap-1">
                      <ArrowDownWideNarrow className="w-4 h-4 text-green-800" />
                      <span>Entrada</span>
                    </div>
                  )}

                  {/* type out */}
                  {movement.type === "OUT" && (
                    <div className="flex items-center gap-1">
                      <ArrowUpNarrowWide className="w-4 h-4 text-red-900" />
                      <span>Saída</span>
                    </div>
                  )}

                </TableCell>
                <TableCell>
                  <Badge className={statusColor[movement.status]}>
                    {movement.status === "PENDING"
                      ? "Pendente"
                      : movement.status === "COMPLETED"
                        ? "Concluída"
                        : "Cancelada"}
                  </Badge>
                </TableCell>
                <TableCell>{movement.quantity}</TableCell>
                <TableCell>{movement.originWareHouse?.name || "-"}</TableCell>
                <TableCell>{movement.destinationWarehouse?.name || "-"}</TableCell>
                <TableCell>{movement.notes || "-"}</TableCell>
                <TableCell>
                  {new Date(movement.createdAt).toLocaleDateString()}
                </TableCell>
                {/* <TableCell>
                  <EditMovementModal movementId={movement.id} />
                </TableCell> */}
                <TableCell>
                  <Link href={`/movements/${movement.id}`}>
                    Detalhes
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default MovementsPage