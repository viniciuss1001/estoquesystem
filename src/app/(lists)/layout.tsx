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
	 </div>
  )
}

export default ListsLayout