import LoaderComponent from '@/components/shared/LoaderComponent'
import React, { Suspense } from 'react'
import SupplierInvoicesClientPage from '@/app/(lists)/supplier-invoice/_components/SupplierInvoiceClientPage'

const page = () => {
	return (
		<Suspense fallback={
			<LoaderComponent />
		}>
			<SupplierInvoicesClientPage />
		</Suspense>
	)
}

export default page