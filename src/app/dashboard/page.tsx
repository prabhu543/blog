'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const Dashbaord = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className='min-h-screen'>
      Dashbaord
    </div>
  )
}

export default Dashbaord
