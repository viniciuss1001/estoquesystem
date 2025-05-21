import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PlusCircle } from 'lucide-react'
import CreateProductModal from '../pages/product/create-product-modal'
import CreateMovementForm from '../pages/movements/create-movement-form'
import CreateSupplierModal from '../pages/supplier/create-supplier-modal'

const CreatorGenericModal = () => {
  return (
	 <DropdownMenu>
		<DropdownMenuTrigger className='max-w-2/3 rounded-md flex items-center justify-center gap-2 pl-4 pr-4 ml-2 mr-2 p-2 cursor-pointer bg-sidebar-accent'>
				<PlusCircle className='size-5'/>
		</DropdownMenuTrigger>
		<DropdownMenuContent className='flex flex-col gap-2 w-full justify-start items-start'>
			<CreateProductModal />
			<CreateMovementForm />
			<CreateSupplierModal />
		</DropdownMenuContent>
	 </DropdownMenu>
  )
}

export default CreatorGenericModal