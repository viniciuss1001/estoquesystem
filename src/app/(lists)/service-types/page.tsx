"use client"
import ServiceTypeCreateForm from '@/components/pages/service-types/ServiceTypeCreateForm'
import ServiceTypeList from '@/components/pages/service-types/ServiceTypeList'



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