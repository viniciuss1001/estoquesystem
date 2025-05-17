"use client"
import { AlertTriangle, Clock, RefreshCw, TrendingUp } from 'lucide-react'
import InfoCard from './InfoCard'
import NavbarComponents from './Navbar'

const MainLayoutDashboard = () => {
  return (
	 <main className='w-full pl-6 pr-6 pb-6 pt-4 space-y-6'>
		<NavbarComponents />
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
			<InfoCard 
			title='Total de Produtos'
			total='182'
			icon={TrendingUp}
			iconClassname='text-blue-500'
			/>

			<InfoCard 
			title='Movimentações hoje'
			total='23'
			icon={RefreshCw}
			iconClassname='text-green-600'
			/>

			<InfoCard 
			title='Produtos em Falta'
			total='5'
			icon={AlertTriangle}
			iconClassname='text-red-600'
			/>

			<InfoCard 
			title='Entregas Previstas'
			total='10'
			icon={Clock}
			iconClassname='text-yellow-700'
			/>
		</div>
	 </main>
  )
}

export default MainLayoutDashboard