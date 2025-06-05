"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"


const AuditLogs = () => {


  const { data, isLoading } = useQuery({
    queryKey: ["audit-log"],
    queryFn: async () => {
      const res = await fetch("/api/audit-log");
      return res.json();
    },
  });

  function ActionBadge({ action }: { action: string }) {
    let variant: "default" | "destructive" | "outline" | "secondary" = "default"

    switch (action.toLowerCase()) {
      case "create":
        variant = "default";
        break;
      case "update":
        variant = "secondary";
        break;
      case "delete":
        variant = "destructive";
        break;
      case "login":
      case "logout":
        variant = "outline";
        break;
      default:
        variant = "outline";
    }

    return <Badge variant={variant} className="uppercase">{action}</Badge>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">
        Histórico de Ações
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Usuário</TableHead>
            <TableHead>Ação</TableHead>
            <TableHead>Entidade</TableHead>
            <TableHead>Descrição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5}>Carregando...</TableCell>
            </TableRow>
          ) : (
            data?.map((log: any) => (
              <TableRow key={log.id}>
                <TableCell>{new Date(log.createdAt).toLocaleString()}</TableCell>
                <TableCell>{log.user?.email ?? "Automático"}</TableCell>
                <TableCell>
                  <ActionBadge action={log.action}/>
                </TableCell>
                <TableCell>{log.entity}</TableCell>
                <TableCell>{log.description}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>


    </div>
  )
}

export default AuditLogs