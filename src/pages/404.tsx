import Logo from '@/components/Logo'
import React from 'react'

const Custom404 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-primary">
      <div className="flex">
        <div className="mr-12">
          <Logo size={128} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-primaryText">404</h1>
          <h2 className="text-3xl font-semibold text-primaryText">
            Page not found
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Custom404
