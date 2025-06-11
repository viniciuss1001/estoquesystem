"use client"

import CreateWarehouseModal from "@/components/pages/warehouse/CreateWarehouseModal"
import EditWarehouseModal from "@/components/pages/warehouse/EditWarehouseModal"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/lib/axios"
import { Loader2, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"


interface Warehouse {
	id: string
	name: string
	location?: string | null
  description: string
}

const WarehousePage = () => {
	const [warehouses, setWarehouses] = useState<Warehouse[]>([])
	const [loading, setLoading] = useState(true)

	const fetchWarehouses = async () => {
		try {
			const response = await api.get("/warehouse")
			setWarehouses(response.data)
			setLoading(false)

		} catch (error) {
			console.log(error)
			toast.error("Erro ao carregar armazéns")
			setLoading(false)
		}
	}
	const handleDelete = async (id: string) => {
		try {
			await api.delete(`/warehouse/${id}`)
			setWarehouses(prev => prev.filter(w => w.id !== id))
			toast.success("Armazém excluído com sucesso!")
		} catch(error) {
			toast.error("Erro ao excluir armazém.")
      // console.log(error)
		}
	}

	useEffect(() => {
		fetchWarehouses()
	}, [])

	if (loading) {
		return <div className="flex justify-center items-center h-full"><Loader2 className="w-6 h-6 animate-spin" /></div>
	}

	return (
		 <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Armazéns</h2>
        <CreateWarehouseModal onCreated={fetchWarehouses} />
      </div>

      {warehouses.length === 0 ? (
        <p>Nenhum armazém cadastrado.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {warehouses.map((w) => (
              <TableRow key={w.id}>
                <TableCell>{w.name}</TableCell>
                <TableCell>{w.location || "-"}</TableCell>
                <TableCell>{w.description}</TableCell>
                <TableCell className="flex gap-2 justify-end">
                  <EditWarehouseModal warehouse={w} onUpdated={fetchWarehouses} />
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(w.id)}
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
	)
}

export default WarehousePage