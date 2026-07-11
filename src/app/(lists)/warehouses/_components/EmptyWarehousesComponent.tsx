import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FolderX } from "lucide-react";
import CreateWarehouseModal from './CreateWarehouseModal';

const EmptyWarehousesComponent = () => {
  return (
	 <Empty className="flex center">
			<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum armazém encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum armazém encontrado no momento. Clique no botão abaixo para criar seu primeiro local de armazenamento de itens.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateWarehouseModal />
			</EmptyContent>

		</Empty>
  )
}

export default EmptyWarehousesComponent