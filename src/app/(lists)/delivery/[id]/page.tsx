"use client"

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useDelivery } from "@/lib/queries"
import { Delivery } from "@/types/types"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"


const DeliveryPage = () => {
  const { id } = useParams()

  const { data: delivery, isLoading, isError } = useDelivery(id as string)

  const formatStatus = (status: Delivery["status"]) => {
    switch (status) {
      case "PENDING":
        return <span className="text-yellow-600 font-medium">Pendente</span>
      case "COMPLETED":
        return <span className="text-green-600 font-medium">Concluída</span>
      case "CANCELED":
        return <span className="text-red-600 font-medium">Cancelada</span>
      case "LATE":
        return <span className="text-orange-600 font-medium">Cancelada</span>
    }
  }

  if (isLoading) {
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
            <p>
              <span className="font-semibold">Produto:</span>
              <Link href={`/products/${delivery.product.id}`} className="text-blue-500">
                {delivery.product.name}
              </Link>
            </p>
            <p><span className="font-semibold">Quantidade:</span> {delivery.quantity}</p>
            <p>
              <span className="font-semibold">Fornecedor:</span>
              <Link href={`/suppliers/${delivery.supplier.id}`} className="text-blue-500">
                {delivery.supplier.name}
              </Link>
            </p>
            <p>
              <span className="font-semibold">Armazém:</span>{" "}
              <Link href={`/warehouses/${delivery.warehouse.id}`} className="text-blue-500">
                {delivery.warehouse.name}
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data, Status e Boleto</CardTitle>
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
            <p>
              <span className="font-semibold">Status:</span>
              {formatStatus(delivery.status)}
            </p>

            {delivery.supplierInvoice ? (
              <p>
                <span className="font-semibold">Boleto:</span>{" "}
                <Link
                  href={`/supplier-invoice/${delivery.supplierInvoice.id}`}
                  className="text-blue-600 underline"
                >
                  {delivery.supplierInvoice.title}
                </Link>
              </p>
            ) : (
              <p className="text-muted-foreground">Nenhum boleto vinculado</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DeliveryPage
