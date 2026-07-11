import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FolderX } from 'lucide-react';
import CreateProductModal from './create-product-modal';

const EmptyProductsComponent = () => {
  return (
	 <Empty className="flex center">
			<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum produto encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum produto encontrado no momento. Clique no botão abaixo para cadastrar seu primeiro produto.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateProductModal />
			</EmptyContent>

		</Empty>
  )
}

export default EmptyProductsComponent