import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FolderX } from "lucide-react";
import CreateServiceModal from "./CreateServiceModal";


const EmptyServiceComponent = () => {
	return (
		<Empty className="flex center">
			<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum serviço encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum serviço encontrado no momento. Clique no botão abaixo para criar seu primeiro projeto.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateServiceModal />
			</EmptyContent>

		</Empty>
	)
}

export default EmptyServiceComponent