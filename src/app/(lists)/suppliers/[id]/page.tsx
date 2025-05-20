"use client"

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Supplier {
  id: string,
  name: string
  email: string
  contactPhone: string
  deliveryTime: string
  description?: string
}

const SupplierPage = () => {
  const [supplier, setSupplier] = useState<Supplier>()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    api.get(`supplier/${id}`)
      .then((response) => {
        const supplier = response.data
        setSupplier(supplier)
      })
      .catch(() => {
        toast.error("Erro ao buscar fornecedor.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>

    )
  }


  return (
    <div className="p-6 max-w-full">
      <div className="mb-2 flex p-2 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">
              Início
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/suppliers">
              Fornecedores
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              {supplier?.name}
            </BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h2 className="text-xl m-2">
        <span className="font-bold">
          Fornecedor:
        </span>
        {" "}{supplier?.name}
      </h2>
      <div className="border rounded-md p-2 w-3/4 flex items-center justify-start gap-4 mt-4">
        <div>
          <span className="font-bold  m-1">
            Email: {" "}
          </span>
          <span >
            {supplier?.email}
          </span>
        </div>
        <div>
          <span className="font-bold  m-1">
            Telefone: {" "}
          </span>
          <span >
            {supplier?.contactPhone}
          </span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <span className="font-bold ">
          Tempo de entrega: {" "}
        </span>
        <div className="pl-3 pr-3 pt-1 pb-1 text-white mr-3 flex rounded-sm bg-blue-800 text-sm">
          {supplier?.deliveryTime}
        </div>
      </div>
      <h3 className="mt-4 ">
        <span className="font-bold">
          Descrição:
        </span>
        {" "} {supplier?.description}
      </h3>
    </div>
  )
}

export default SupplierPage