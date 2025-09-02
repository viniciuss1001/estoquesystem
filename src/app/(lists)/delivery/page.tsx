import { Suspense } from "react"
import DeliveryPageClient from "@/app/(lists)/delivery/_components/DeliveryPageClient"

const page = () => {
	return (
		<Suspense fallback={
			<div>
				Carregando entregas...
			</div>
		}>
			<DeliveryPageClient />
		</Suspense>
	)
}

export default page