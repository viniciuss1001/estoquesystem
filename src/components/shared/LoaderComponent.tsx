import React from 'react'

const LoaderComponent = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-background">
      <div className="absolute w-32 h-32 border-8 border-blue-500 border-solid rounded-full animate-loader"></div>
      <div className="absolute w-32 h-32 border-8 border-blue-500 border-solid rounded-full opacity-0 animate-loader-delay"></div>
    </div>
  )
}

export default LoaderComponent