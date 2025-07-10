"use client"

import ServiceTypeCreateForm from '@/app/(lists)/service-types/_components/ServiceTypeCreateForm'
import ServiceTypeList from '@/app/(lists)/service-types/_components/ServiceTypeList'

const ServiceTypePage = () => {
	
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">Tipos de Serviço</h1>

			</div>
			<ServiceTypeCreateForm />
			<ServiceTypeList />
			
		</div>
	)
}

export default ServiceTypePage