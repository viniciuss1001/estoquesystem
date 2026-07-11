import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { FolderX } from 'lucide-react';
import React from 'react'
import CreateServiceProviderForm from './CreateServiceProviderForm';

const EmptyServicesProviders = () => {
  return (
	 <Empty className="flex center">
		<EmptyHeader>
				<EmptyMedia variant={"icon"}>
					<FolderX />
				</EmptyMedia>
				<EmptyTitle>
					Nenhum prestador de serviço encontrado.
				</EmptyTitle>
				<EmptyDescription>
					Nenhum prestador de serviço encontrado no momento. Clique no botão abaixo para criar seu primeiro provedor.
				</EmptyDescription>
			</EmptyHeader>

			<EmptyContent className="flex-row justify-center gap-2">
				<CreateServiceProviderForm />
			</EmptyContent>
	 </Empty>
  )
}

export default EmptyServicesProviders