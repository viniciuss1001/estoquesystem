"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOverdueInvoices } from "@/lib/queries"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { FileWarning, Loader2 } from "lucide-react"

const OverdueInvoices = () => {

	const { data, isLoading } = useOverdueInvoices()
	console.log(data)

	return (
		<Card className="col-span-1 sm:col-span-2 lg:col-span-3 min-w-[350px] w-full h-fit min-h-[200px] transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-background">
			<CardHeader>
				<CardTitle className="text-lg">Boletos Vencidos</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<div className="flex items-center justify-center py-6 text-muted-foreground">
						<Loader2 className="animate-spin w-5 h-5 mr-2" />
						Carregando boletos vencidos...
					</div>
				) : data && data.length > 0 ? (
					<ul className="space-y-4">
						{data.map((invoice) => (
							<li key={invoice.id} className="flex items-start justify-between">
								<div className="space-y-1">
									<div className="flex items-center gap-2">
										<FileWarning className="w-4 h-4 text-destructive" />
										<span className="font-medium">{invoice.supplier?.name || invoice.serviceProvider?.name || "-"}</span>
										<Badge variant="destructive">Vencido</Badge>
									</div>
									<div className="text-sm text-muted-foreground">
										Valor: R${" "}
										<strong>
											{invoice.amount.toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}
										</strong>{" "}
										— venc.{" "}
										{format(new Date(invoice.dueDate), "dd/MM/yyyy", { locale: ptBR })}
									</div>
								</div>
								<span className="text-xs text-muted-foreground">Aguardando pagamento</span>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-muted-foreground">Nenhum boleto vencido encontrado.</p>
				)}
			</CardContent>
		</Card>
	)
}

export default OverdueInvoices