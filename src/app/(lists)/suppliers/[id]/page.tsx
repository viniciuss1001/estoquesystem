"use client"

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Supplier {
  id: string
  name: string
  email: string
  contactPhone: string
  deliveryTime: string
  description?: string
  products: {
    id: string
    name: string
    category?: {
      name: string
    } | null
  }[]
}

const SupplierPage = () => {
  const [supplier, setSupplier] = useState<Supplier>()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    api.get(`/supplier/${id}`)
      .then((res) => setSupplier(res.data))
      .catch(() => toast.error("Erro ao buscar fornecedor."))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
      </div>
    )
  }

  if (!supplier) {
    return (
      <div className="p-6">
        <p className="text-destructive">Fornecedor não encontrado.</p>
      </div>
    )
  }
  console.log(supplier.products.map((product) => {
    product.name
  }))

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/suppliers">Fornecedores</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{supplier.name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        Fornecedor: <span className="text-primary">{supplier.name}</span>
      </h1>

      {/* Info Card */}
      <Card className="mb-8 shadow">
        <CardHeader>
          <CardTitle>Informações do Fornecedor</CardTitle>
          <CardDescription>Dados comerciais e de contato</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground">Email</h4>
            <p>{supplier.email}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground">Telefone</h4>
            <p>{supplier.contactPhone}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground">Tempo de Entrega</h4>
            <p>{new Date(supplier.deliveryTime).toLocaleDateString()}</p>
          </div>
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-sm text-muted-foreground">Descrição</h4>
            <p className="whitespace-pre-wrap">{supplier.description || "-"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Produtos fornecidos */}
      <Card>
        <CardHeader>
          <CardTitle>Produtos Fornecidos</CardTitle>
          <CardDescription>Todos os produtos vinculados a este fornecedor</CardDescription>
        </CardHeader>
        <CardContent>
          {supplier.products.length === 0 ? (
            <p className="text-muted-foreground">Este fornecedor ainda não fornece nenhum produto.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {supplier.products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category?.name || "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default SupplierPage
