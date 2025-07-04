"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Mail,
  Phone,
  User,
  UserCog,
  Building2
} from "lucide-react"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ThisUser } from "@/types/types"
import { toast } from "sonner"
import api from "@/lib/axios"
import EditUserModal from "@/components/pages/settings/edit-user-modal"

const SettingsPage = () => {
  const { data: session } = useSession()
  const { id: userId } = useParams()
  const [user, setUser] = useState<ThisUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return
    api.get(`/user/${userId}`)
      .then((res) => setUser(res.data))
      .catch(() => toast.error("Erro ao carregar dados do usuário"))
      .finally(() => setLoading(false))
  }, [userId])

  if (!session) {
    return <p className="p-6 text-center">Você precisa estar logado para acessar esta página.</p>
  }

  if (loading) {
    return <div className="p-6 text-center text-muted-foreground">Carregando informações...</div>
  }

  if (!user) {
    return <div className="p-6 text-center text-destructive">Usuário não encontrado.</div>
  }

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
            <BreadcrumbPage>{user.name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Saudação */}
      <div className="p-1 w-full flex items-center gap-2 justify-between mb-6">

        <h1 className="text-3xl font-bold ml-0">
          Olá, <span className="text-primary">{user.name}</span>!
        </h1>
        <EditUserModal userId={user.id} />
      </div>

      {/* Card de Informações */}
      <Card className="shadow-xl rounded-2xl">
        <CardHeader className="flex items-center flex-col text-center gap-3">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="text-xl">
              {user.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <CardDescription>Seus dados pessoais e profissionais</CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="text-muted-foreground" size={18} />
            <div>
              <h4 className="text-sm text-muted-foreground">Email</h4>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-center gap-2">
            <Phone className="text-muted-foreground" size={18} />
            <div>
              <h4 className="text-sm text-muted-foreground">Telefone</h4>
              <p className="text-sm">{user.phone || "-"}</p>
            </div>
          </div>

          {/* Cargo */}
          <div className="flex items-center gap-2">
            <User className="text-muted-foreground" size={18} />
            <div>
              <h4 className="text-sm text-muted-foreground">Cargo</h4>
              <p className="text-sm">{user.office}</p>
            </div>
          </div>

          {/* Departamento */}
          <div className="flex items-center gap-2">
            <Building2 className="text-muted-foreground" size={18} />
            <div>
              <h4 className="text-sm text-muted-foreground">Departamento</h4>
              <p className="text-sm">{user.department}</p>
            </div>
          </div>

          {/* Descrição */}
          <div className="sm:col-span-2 flex gap-2 mt-2">
            <UserCog className="text-muted-foreground mt-1" size={18} />
            <div>
              <h4 className="text-sm text-muted-foreground">Descrição</h4>
              <p className="text-sm whitespace-pre-wrap">{user.description || "-"}</p>
            </div>
          </div>
        </CardContent>
      </Card>


    </div>
  )
}

export default SettingsPage
