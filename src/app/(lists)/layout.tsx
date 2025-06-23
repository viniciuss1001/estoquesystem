import DeliveryCalendarAside from '@/components/pages/DeliveryCalendarAside'
import LowStockAlert from '@/components/pages/LowStockAlert'
import NavbarComponents from '@/components/pages/Navbar'
import SidebarComponent from '@/components/pages/Sidebar'
import React from 'react'

const ListsLayout = ({children}: {children: React.ReactNode}) => {
  return (
	 <div className="flex min-h-screen w-full">
		<SidebarComponent />
		<main className='w-full p-6'>
			<NavbarComponents />
			{children}
		</main>
		<aside className='p-2 flex flex-col gap-2 mt-4  mb-4 border-l border-gray-200 space-y-4'>
			<DeliveryCalendarAside />
			<LowStockAlert />
		</aside>
	 </div>
  )
}

export default ListsLayout