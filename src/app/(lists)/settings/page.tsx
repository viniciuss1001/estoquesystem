"use client"

import EditUserModal from "@/components/pages/settings/edit-user-modal"
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { useSession } from "next-auth/react"



const SettingsPage = () => {

  const { data: session } = useSession()


  return (
    <div className='p-6 max-w-full'>
       <div className="mb-2 flex p-2 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">
              Início
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink>
              Configurações
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              {session?.user.name}
            </BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

       <h2 className="text-xl m-2">
        <span className="font-bold">
          Olá:
        </span>
        {" "}{session?.user.name}
      </h2>

      <div className="border rounded-md p-2 w-3/4 flex items-center justify-start gap-4 mt-4">
        <div>
          <span className="font-bold  m-1">
            Email: {" "}
          </span>
          <span >
            {session?.user?.email}
          </span>
        </div>
        <div>
          <span className="font-bold  m-1">
            Cargo: {" "}
          </span>
          <span >
            {session?.user.office}
          </span>
        </div>
        <EditUserModal userId={session?.user.id ?? ""}/>
      </div>
      
    </div>
  )
}

export default SettingsPage