"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Delivery {
  id: string
  product: {
    id: string
    name: string
  }
  quantity: number
  supplier: {
    id: string
    name: string
  }
  expectedAt: string
  status: "PENDING" | "COMPLETED" | "CANCELLED"
}

const DeliveryPage = () => {
  const [delivery, setDelivery] = useState<Delivery | null>(null)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/delivery/${id}`)
      .then((res) => setDelivery(res.data))
      .catch(() => toast.error("Erro ao buscar entrega."))
      .finally(() => setLoading(false))
  }, [id])

  const formatStatus = (status: Delivery["status"]) => {
    switch (status) {
      case "PENDING":
        return <span className="text-yellow-600 font-medium">Pendente</span>
      case "COMPLETED":
        return <span className="text-green-600 font-medium">Concluída</span>
      case "CANCELLED":
        return <span className="text-red-600 font-medium">Cancelada</span>
    }
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
      </div>
    )
  }

  if (!delivery) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-destructive">Entrega não encontrada.</h2>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/delivery">Entregas</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Entrega: {delivery.product.name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Entrega</CardTitle>
            <CardDescription>Detalhes do produto e fornecedor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="font-semibold">Produto:</span> {delivery.product.name}</p>
            <p><span className="font-semibold">Quantidade:</span> {delivery.quantity}</p>
            <p><span className="font-semibold">Fornecedor:</span> {delivery.supplier.name}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data e Status</CardTitle>
            <CardDescription>Previsão de entrega e situação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Entrega prevista:</span>{" "}
              {new Date(delivery.expectedAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p><span className="font-semibold">Status:</span> {formatStatus(delivery.status)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DeliveryPage
