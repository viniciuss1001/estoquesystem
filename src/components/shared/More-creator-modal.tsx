import CreateDeliveryForm from '@/app/(lists)/delivery/_components/CreateDeliveryForm'
import CreateMovementForm from '@/app/(lists)/movements/_components/create-movement-form'
import CreateProductModal from '@/app/(lists)/products/_components/create-product-modal'
import CreateSupplierModal from '@/app/(lists)/suppliers/_components/create-supplier-modal'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PlusCircle } from 'lucide-react'

const CreatorGenericModal = () => {
  return (
	 <DropdownMenu>
		<DropdownMenuTrigger className='max-w-2/3 rounded-md flex items-center justify-center gap-2 pl-4 pr-4 ml-2 mr-2 p-2 cursor-pointer '>
				<PlusCircle className='size-5'/>
		</DropdownMenuTrigger>
		<DropdownMenuContent className='flex flex-col gap-2 w-full justify-start items-start'>
			<CreateProductModal />
			<CreateDeliveryForm />
			<CreateMovementForm />
			<CreateSupplierModal />
		</DropdownMenuContent>
	 </DropdownMenu>
  )
}

export default CreatorGenericModal