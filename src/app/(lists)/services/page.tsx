import { Suspense } from "react"
import ServicesPageClient from "./_components/ServicePageClient"
import LoaderComponent from "@/components/shared/LoaderComponent"


const page = () => {
  return (
	 <Suspense fallback={
		<LoaderComponent />
	 }>
		<ServicesPageClient />
	 </Suspense>
  )
}

export default page