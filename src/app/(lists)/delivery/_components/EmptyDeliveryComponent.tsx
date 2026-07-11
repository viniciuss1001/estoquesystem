import { Empty, EmptyHeader, EmptyMedia, EmptyDescription, EmptyTitle, EmptyContent } from '@/components/ui/empty';
import { FolderX } from 'lucide-react';
import React from 'react'
import CreateDeliveryForm from './CreateDeliveryForm';

const EmptyDeliveryComponent = () => {
  return (
	 <Empty className="flex center">
		<EmptyHeader>
			<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhuma entrega encontrada.
				</EmptyTitle>
				<EmptyDescription>
					Nenhuma entrega encontrado no momento. Clique no botão abaixo para criar a primeira entrega.
				</EmptyDescription>
		</EmptyHeader>

		<EmptyContent className="flex-row justify-center gap-2">
				<CreateDeliveryForm />
			</EmptyContent>

	 </Empty>
  )
}

export default EmptyDeliveryComponent