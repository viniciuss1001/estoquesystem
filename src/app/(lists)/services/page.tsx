import ServicesPageClient from "@/app/(lists)/services/_components/ServicePageClient"
import LoaderComponent from "@/components/shared/LoaderComponent"
import { Suspense } from "react"

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