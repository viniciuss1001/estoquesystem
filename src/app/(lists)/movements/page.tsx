import LoaderComponent from '@/components/shared/LoaderComponent'
import React, { Suspense } from 'react'
import MovementsClientPage from './_components/MovementClientPage'

const page = () => {
  return (
    <Suspense fallback={
      <LoaderComponent />
    }>
      <MovementsClientPage />
    </Suspense>
  )
}

export default page