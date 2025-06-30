"use client"

import CreateWarehouseModal from "@/components/pages/warehouse/CreateWarehouseModal"
import EditWarehouseModal from "@/components/pages/warehouse/EditWarehouseModal"
import WarehouseFilterDialog from "@/components/pages/warehouse/WarehouseFilterDialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFilteredWarehouses } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const WarehousePage = () => {
  const [locationFilter, setLocationFilter] = useState<string | undefined>(undefined)

  const { data: warehouses = [], isLoading } = useFilteredWarehouses({ location: locationFilter })

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Armazéns</h2>
          <p className="text-sm text-muted-foreground">
            Total de {warehouses.length} armazén (s) com os filtros aplicados.
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-1">
            <WarehouseFilterDialog onFilter={setLocationFilter} />
            <Button
              variant="ghost"
              onClick={() => setLocationFilter(undefined)}
              disabled={!locationFilter}
              className="cursor-pointer"
            >
              Limpar Filtros
            </Button>
          </div>
          <CreateWarehouseModal />
        </div>
      </div>

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
        {warehouses.length === 0 ? (
          <p>Nenhum armazém cadastrado.</p>
        ) : (
          <TableBody>
            {warehouses.map((w) => (
              <TableRow key={w.id}>
                <TableCell>{w.name}</TableCell>
                <TableCell>{w.location || "-"}</TableCell>
                <TableCell>{w.description || "-"}</TableCell>
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
        )}
      </Table>
    </div>
  )
}

export default WarehousePage