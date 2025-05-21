"use client"

import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

import { AlertTriangle, Clock, Loader, RefreshCw, TrendingUp } from 'lucide-react'
import InfoCard from './InfoCard'
import NavbarComponents from './Navbar'
import DashboardGraph from './dashboard/graphics'
import MovementsLineChart from './dashboard/MovementLineChart'
import ProductsLineChart from './dashboard/ProductsLineChart'

const MainLayoutDashboard = () => {

	const fetchDashboardData = async () => {
		const response = await axios.get("/api/dashboard")
		return response.data
	}

	const {data, isLoading} = useQuery({
		queryKey:["dashboard-data"],
		queryFn: fetchDashboardData
	})

  return (
	 <main className='w-full pl-6 pr-6 pb-6 pt-4 space-y-6 '>
		<NavbarComponents />
		<div className='pl-5 gap-2 w-full flex flex-wrap justify-around'>
			<InfoCard 
			title='Total de Produtos'
			total={`${isLoading ? "..." : data?.totalProducts}`}
			icon={TrendingUp}
			iconClassname='text-blue-500'
			/>

			<InfoCard 
			title='Movimentações hoje'
			total={`${isLoading ? "..." : data.totalMovements}`}
			icon={RefreshCw}
			iconClassname='text-green-600'
			/>

			<InfoCard 
			title='Produtos em Falta'
			total={`${isLoading ? "..." : data.lowStockCount}`}
			icon={AlertTriangle}
			iconClassname='text-red-600'
			/>

			<InfoCard 
			title='Entregas Previstas'
			total={`${isLoading ? "..." : data.upcomingDeliveries}`}
			icon={Clock}
			iconClassname='text-yellow-700'
			/>
		</div>
		<DashboardGraph />
		<MovementsLineChart />
		<ProductsLineChart />
	 </main>
  )
}

export default MainLayoutDashboard