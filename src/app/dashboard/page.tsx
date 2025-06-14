'use client'

import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

const Dashbaord = () => {
  const {user} = useUser();
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className='min-h-screen'>
      welcome {user?.username}
    </div>
  )
}

export default Dashbaord
