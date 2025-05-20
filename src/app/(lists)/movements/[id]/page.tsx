"use client"

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import api from "@/lib/axios"
import { Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"


interface Movement {
  id: string
  type: "IN" | "OUT" | "TRANSFER"
  quantity: number
  origin: string | null
  destination: string | null
  notes: string | null
  createdAt: string
  product: {
    id: string
    name: string 
  }
}

const MovementPage = () => {

  const [movement, setMovement] = useState<Movement>()
  const id = useParams().id as string
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    api.get(`/movements/${id}`)
      .then((response) => {
        const movement = response.data.movement
        setMovement(movement)
      })
      .catch(() => {
        toast.error("Erro ao buscar movimentação.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])


  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  }


  return (
    <div className='p-6 max-w-full'>
      <div className="mb-2 flex p-2 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">
              Início
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/movements">
              Movimentações
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              {movement?.type}
            </BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h2 className="text-xl m-2">
        <span className="font-bold">
          Movimentação:
        </span>
        {" "}{movement?.id}
      </h2>
      <div className="border rounded-md p-2 w-3/4 flex items-center justify-start gap-4 mt-4">
        <div>
          <span className="font-bold  m-1">
            Origem: {" "}
          </span>
          <span >
            {movement?.origin}
          </span>
        </div>
        <div>
          <span className="font-bold  m-1">
            Destino: {" "}
          </span>
          <span >
            {movement?.destination}
          </span>
        </div>
      </div>
      <h3 className="mt-4 p-2 w-full border rounded-md">
				<span className="font-bold">
					Quantidade:
				</span>
				{" "}{movement?.quantity} unidade(s).
			</h3>
      <h3 className="mt-4 p-2 w-full border rounded-md">
				<span className="font-bold">
					Anotações:
				</span>
				{" "}{movement?.notes} unidade(s).
			</h3>
      <div className="mt-4 p-2 w-full border rounded-md">
					<span className="font-bold m-1">
						Criado em: {" "}
					</span>
					<span >
						{new Date(movement?.createdAt ?? '').toLocaleDateString()}
					</span>
				</div>

    </div>
  )
}

export default MovementPage