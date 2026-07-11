import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FolderX } from "lucide-react";
import CreateSupplierModal from "./create-supplier-modal";

const EmptySupplierComponent = () => {
  return (
	 <Empty className="flex center">
			<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum fornecedor encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum fornecedor encontrado no momento. Clique no botão abaixo para criar seu primeiro fornecedor.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateSupplierModal />
			</EmptyContent>

		</Empty>
  )
}

export default EmptySupplierComponent