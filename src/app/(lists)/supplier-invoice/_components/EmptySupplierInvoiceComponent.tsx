import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Paperclip } from "lucide-react";
import CreateSupplierInvoiceForm from "./CreateSupplierInvoiceForm";

const EmptySupplierInvoiceComponent = () => {
	return (
		<Empty className="flex center">
			<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<Paperclip />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum boleto encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum boleto encontrado no momento. Clique no botão abaixo para criar seu primeiro boleto.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateSupplierInvoiceForm />
			</EmptyContent>

		</Empty>
	)
}

export default EmptySupplierInvoiceComponent