"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useServiceProvider } from "@/lib/queries";
import { Info, Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

interface ServiceProviderDialogProps {
	serviceProviderId: string
}

const ServiceProviderDialog = ({ serviceProviderId }: ServiceProviderDialogProps) => {
	const { id: useParamsId } = useParams()

	const id = useParamsId || serviceProviderId

	const { data: serviceProvider, isLoading } = useServiceProvider(id as string)

	const [open, setOpen] = useState(false)

	if (isLoading) {
		return (
			<Loader className="animate-spin" />
		)
	}

	if (!serviceProvider) {
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-muted-foreground">
					Prestador de Serviço não encontrado.
				</p>
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
					Informações do Prestador de Serviço
				</DialogTitle>
				<DialogDescription>
					Veja abaixo a descrição do prestador selecionado
				</DialogDescription>

				<Card className="border-none">
					<CardHeader className="flex flex-col items-center gap-2">
						<CardTitle className="text-center text-2xl font-semibold">
							{serviceProvider.name}
						</CardTitle>
						<CardDescription>
							{serviceProvider.description ? serviceProvider.description : "Sem descrição disponível."}
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-4 border-none">
						
					</CardContent>
				</Card>

			</DialogContent>
		</Dialog>
	)
}

export default ServiceProviderDialog