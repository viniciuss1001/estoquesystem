"use client"

import { useParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import {
  Loader2,
  FileText,
  CalendarDays,
  BadgeCheck,
  Ban,
  Clock,
  FileDown,
} from "lucide-react"
import api from "@/lib/axios"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const statusMap = {
  PENDING: {
    label: "Pendente",
    color: "yellow",
    icon: <Clock className="w-4 h-4 mr-1" />,
  },
  PAID: {
    label: "Pago",
    color: "green",
    icon: <BadgeCheck className="w-4 h-4 mr-1" />,
  },
  CANCELED: {
    label: "Cancelado",
    color: "destructive",
    icon: <Ban className="w-4 h-4 mr-1" />,
  },
}

const SupplierInvoicePage = () => {
  const { id } = useParams()
  const { data: session } = useSession()

  const { data: invoice, isLoading } = useQuery({
    queryKey: ["supplierInvoice", id],
    queryFn: async () => {
      const res = await api.get(`/supplier-invoice/${id}`)
      return res.data
    },
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  if (!invoice) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Boleto não encontrado.</h2>
      </div>
    )
  }

  const statusInfo = statusMap[invoice.status] || {
    label: invoice.status,
    color: "secondary",
    icon: null,
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbLink href="/supplier-invoices">Boletos</BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbPage>{invoice.title}</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Título */}
      <div className="flex items-center gap-2">
        <FileText className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Detalhes do Boleto</h1>
      </div>

      {/* Detalhes principais */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col gap-2">
            <p><span className="font-medium text-foreground">Fornecedor:</span> {invoice.supplier?.name || "-"}</p>
            <p><span className="font-medium text-foreground">Título:</span> {invoice.title}</p>
            <p><span className="font-medium text-foreground">Descrição:</span> {invoice.description || "-"}</p>
            <p><span className="font-medium text-foreground">Valor:</span> R$ {Number(invoice.amount).toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Vencimento:</span>
              {invoice.dueDate ? format(new Date(invoice.dueDate), "dd/MM/yyyy") : "-"}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium text-foreground">Status:</span>
              <Badge variant={statusInfo.color as any} className="flex items-center gap-1">
                {statusInfo.icon} {statusInfo.label}
              </Badge>
            </p>
            <p>
              <span className="font-medium text-foreground">Arquivo:</span>{" "}
              {invoice.fileUrl ? (
                <a
                  href={invoice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <FileDown className="w-4 h-4 mr-1" /> Visualizar PDF
                </a>
              ) : (
                "Não enviado"
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Datas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Datas</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <span className="font-medium text-foreground">Criado em:</span>{" "}
            {invoice.createdAt ? format(new Date(invoice.createdAt), "dd/MM/yyyy") : "-"}
          </p>
          <p>
            <span className="font-medium text-foreground">Atualizado em:</span>{" "}
            {invoice.updatedAt ? format(new Date(invoice.updatedAt), "dd/MM/yyyy") : "-"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SupplierInvoicePage
