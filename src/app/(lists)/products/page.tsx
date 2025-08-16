import LoaderComponent from '@/components/shared/LoaderComponent'
import React, { Suspense } from 'react'
import ProductsClientPage from './_components/ProductsClientPage'

const page = () => {
  return (
    <Suspense fallback={
      <LoaderComponent />
    }>
      <ProductsClientPage />
    </Suspense>
  )
}

export default page