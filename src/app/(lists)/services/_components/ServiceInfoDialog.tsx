"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useService } from "@/lib/queries";
import { Banknote, Building2, Calendar1, CircleCheckBig, Coins, Info, List, Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";


interface ServiceInfoDialogProps {
	serviceId: string
}

const ServiceInfoDialog = ({ serviceId }: ServiceInfoDialogProps) => {
	const { id: useParamsId } = useParams()

	const id = useParamsId || serviceId

	const { data: service, isLoading } = useService(id as string)

	const [open, setOpen] = useState(false)


	if (isLoading) {
		return (
			<Loader className="animate-spin" />
		)
	}

	if (!service) {
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-muted-foreground">Serviço não encontrado.</p>
			</div>
		)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="cursor-pointer" size="icon">
					<Info className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent className="bg-card">
				<DialogTitle>
					Informações do Serviço
				</DialogTitle>
				<DialogDescription>
					Veja abaixo a descrição do serviço selecionado
				</DialogDescription>

				<Card className="border-none">
					<CardHeader className="flex flex-col items-center gap-2">
						<CardTitle className="text-center text-2xl font-semibold">
							{service.provider.name}
						</CardTitle>
						<CardDescription>
							{service.description ? service.description : "Sem descrição disponível."}
						</CardDescription>

					</CardHeader>
					<CardContent className="space-y-4 border-none">
						<div className="flex items-center gap-2">
							<List size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Tipo de Serviço:</span>
							<span className="font-medium">{service.type.name}</span>
						</div>

						<div className="flex items-center gap-2">
							<Building2 size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Local do Serviço:</span>
							<span className="font-medium">{service.location.name}</span>
						</div>

						<div className="flex items-center gap-2">
							<CircleCheckBig size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Estado:</span>
							<span className="font-medium">{service.status}</span>
						</div>

						<div className="flex items-center gap-2">
							<Banknote size={18} className="text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Valor do Serviço:</span>
							<span className="font-medium">{`R$ ${service.cost.toFixed(2)}`}</span>
						</div>
					</CardContent>
				</Card>

			</DialogContent>

		</Dialog>
	)

}

export default ServiceInfoDialog