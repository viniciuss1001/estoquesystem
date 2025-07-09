"use client"

import ServiceLocationCreateForm from "@/components/pages/service-location/ServiceLocationCreateForm"
import ServiceLocationList from "@/components/pages/service-location/ServiceLocationList"

const ServiceLocalePage = () => {
	return (
		<div className="p-6 space-y-6" >
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">Locais de Serviço</h1>
			</div>

		<ServiceLocationCreateForm />

		<ServiceLocationList />

		</div >
	)
}

export default ServiceLocalePage