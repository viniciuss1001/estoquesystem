"use client"

import CreateMovementForm from '@/components/pages/movements/create-movement-form'
import MovementFilterDialog from '@/components/pages/movements/MovementFIlterDialog'
import { Badge } from "@/components/ui/badge"
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useFilteredMovements } from '@/lib/queries'
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Repeat2 } from "lucide-react"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const MovementsPage = () => {

  const searchParams = useSearchParams()

  const validTypes = ["IN", "OUT", "TRANSFER"] as const
  const validStatuses = ["PENDING", "COMPLETED", "CANCELED"] as const

  const rawType = searchParams.get("type")
  const type = validTypes.includes(rawType as any) ? (rawType as typeof validTypes[number]) : undefined

  const rawStatus = searchParams.get("status")
  const status = validStatuses.includes(rawStatus as any) ? (rawStatus as typeof validStatuses[number]) : undefined


  const productId = searchParams.get("productId") || undefined
  const originWarehouseId = searchParams.get("originWarehouseId") || undefined
  const destinationWarehouseId = searchParams.get("destinationWarehouseId") || undefined

  const { data: movements = [], isLoading } = useFilteredMovements({
    productId, type, status, originWarehouseId, destinationWarehouseId
  })

  const statusColor = {
    PENDING: "bg-yellow-100 text-yellow-800",
    COMPLETED: "bg-green-100 text-green-800",
    CANCELED: "bg-red-100 text-red-800",
  }


  return (
    <div className='p-6 w-full h-full'>
      <div className='flex  p-2'>

        <div className='flex flex-col gap-2'>
          <h2 className="text-2xl font-bold">Histórico de Movimentações</h2>

          <p className='text-sm text-muted-foreground'>
            Total de {movements.length} movimentações sendo exibidas.
          </p>
        </div>

        <div className='flex ml-auto gap-2 items-center justify-end'>
          <MovementFilterDialog />

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
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Carregando...
              </TableCell>
            </TableRow>
          ) :
            movements.length === 0 ? (
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
                  <TableCell>
                    <Link href={`/movements/${movement.id}`}>
                      Detalhes
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default MovementsPage