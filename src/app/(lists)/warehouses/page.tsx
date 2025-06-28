"use client"

import CreateWarehouseModal from "@/components/pages/warehouse/CreateWarehouseModal"
import EditWarehouseModal from "@/components/pages/warehouse/EditWarehouseModal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useWarehouses } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const WarehousePage = () => {

  const { data: warehouses = [], isLoading } = useWarehouses()

  if (isLoading) {
    return <div className="flex justify-center items-center h-full"><Loader2 className="w-6 h-6 animate-spin" /></div>
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Armazéns</h2>
        <CreateWarehouseModal />
      </div>

      {warehouses.length === 0 ? (
        <p>Nenhum armazém cadastrado.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Ações</TableHead>
              <TableHead>Detalhes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {warehouses.map((w) => (
              <TableRow key={w.id}>
                <TableCell>{w.name}</TableCell>
                <TableCell>{w.location || "-"}</TableCell>
                <TableCell>{w.description}</TableCell>
                <TableCell className="flex gap-2 justify-end">
                  <EditWarehouseModal warehouse={w} />
                </TableCell>
                <TableCell>
                  <Link href={`/warehouses/${w.id}`}>
                    Detalhes
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

export default WarehousePage