"use client"
import ServiceLocationEditForm from "@/app/(lists)/service-locations/_components/ServiceLocationEditForm";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/lib/axios";
import { useServiceLocations } from "@/lib/queries";
import { ServiceLocation } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";


const ServiceLocationList = () => {

	const queryClient = useQueryClient()

	const { data: serviceLoations = [] } = useServiceLocations()

	const deleteMutation = useMutation({
		mutationFn: async (id: string) => {
			await api.delete(`/service-location/${id}`);
		},
		onSuccess: () => {
			toast.success("Local de serviço deletado com sucesso");
			queryClient.invalidateQueries({ queryKey: ["serviceLocations"] });
		},
		onError: () => {
			toast.error("Erro ao deletar local de serviço");
		},
	})

	return (
		<Card className="border-none max-w-2xl ml-auto mr-auto">

      <CardHeader>
        <CardTitle>Local de Serviço</CardTitle>
        <CardDescription>
          Total de {serviceLoations.length} locais de serviço registrados.
        </CardDescription>
      </CardHeader>

      <div className="overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Local de Serviço</TableHead>
				  <TableHead>Endereçamento</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceLoations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  Nenhum local de serviço registrado.
                </TableCell>
              </TableRow>
            ) : (
              serviceLoations.map((serviceLocation: ServiceLocation) => (
                <TableRow key={serviceLocation.id}>
                  <TableCell>{serviceLocation.name}</TableCell>
						<TableCell>
							{serviceLocation.address}
						</TableCell>
                  <TableCell className="text-right space-x-2 flex ml-auto gap-2 justify-end items-end">

							<ServiceLocationEditForm serviceLocation={serviceLocation}/>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteMutation.mutate(serviceLocation.id)}
                      className="flex gap-2 cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
	)
}

export default ServiceLocationList