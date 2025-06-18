"use client"

import EditUserModal from "@/components/pages/settings/edit-user-modal"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import api from "@/lib/axios"
import { toast } from "sonner"

interface ThisUser {
  id: string
  name: string
  email: string
  office: "Admin" | "Gestor"
  department: string
  phone: string
  description: string
}

const SettingsPage = () => {

  const [user, setUser] = useState<ThisUser | null>(null)
  
  const { data: session } = useSession()
  
  if (!session) {
    return <p className="p-6 text-center">Você precisa estar logado para acessar esta página.</p>
  }
  
  const { id: userId } = useParams()

  useEffect(() => {
    api.get(`/user/${userId}`)
      .then((response) => {
        setUser(response.data.user)

      })
      .catch(() => {
        toast.error("Erro ao carregar usuário")
      })
  }, [userId])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/settings">Configurações</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{user?.name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-8">
        Olá, <span className="text-primary">{user?.name}</span>!
      </h1>

      {/* User info card */}
      <Card className="mb-8 shadow-md">
        <CardHeader>
          <CardTitle>Informações do Usuário</CardTitle>
          <CardDescription>Visualize e atualize suas informações pessoais</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Nome completo</h3>
            <p>{user?.name}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Email</h3>
            <p>{user?.email}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Cargo</h3>
            <p>{user?.office || "-"}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Telefone</h3>
            <p>{user?.phone || "-"}</p>
          </div>
          <div className="sm:col-span-2">
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Descrição</h3>
            <p className="whitespace-pre-wrap">{user?.description || "-"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Edit User Button */}
      <div className="flex justify-end">
        <EditUserModal userId={user?.id || ""} />
      </div>
    </div>
  )
}

export default SettingsPage
