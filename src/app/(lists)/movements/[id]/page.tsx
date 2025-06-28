"use client"

import EditTransferModal from "@/components/pages/movements/edit-movement-modal"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useMovement } from "@/lib/queries"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"


const MovementPage = () => {

  const id = useParams().id as string

  const { data: movement, isLoading } = useMovement(id as string)

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center p-10">
        <Loader2 className="animate-spin w-6 h-6" />
      </div>
    )
  }

  if (!movement) return null

  const movementTypeLabel = {
    IN: "Entrada",
    OUT: "Saída",
    TRANSFER: "Transferência",
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbLink href="/movements">Movimentações</BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Detalhes</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>


      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Movimentação #{movement.id}</h1>
        <Badge variant="outline">
          {movementTypeLabel[movement.type] || movement.type}
        </Badge>
        <EditTransferModal movementId={id} />
      </div>


      <div className="rounded-xl border p-4 bg-muted/50">
        <h2 className="font-semibold text-muted-foreground mb-1">Produto</h2>
        <p className="text-lg">{movement.product.name}</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Origem</h3>
          <p>{movement.originWareHouse?.name || "—"}</p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Destino</h3>
          <p>{movement.destinationWarehouse?.name || "—"}</p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Quantidade</h3>
          <p>{movement.quantity} unidade(s)</p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Data de criação</h3>
          <p>{new Date(movement.createdAt).toLocaleDateString()}</p>
        </div>
      </div>


      {movement.notes && (
        <div className="rounded-xl border p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Observações</h3>
          <p className="whitespace-pre-wrap">{movement.notes}</p>
        </div>
      )}
    </div>
  )
}

export default MovementPage
