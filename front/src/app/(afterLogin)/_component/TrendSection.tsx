"use client"
import React from 'react'
import Trand from '@/app/(afterLogin)/_component/Trand'
import { usePathname } from 'next/navigation'

const TrendSection = () => {

  const pathname = usePathname()

  console.log(pathname)
  if(pathname === '/explore') return null;

  return (
    <div>
      <h3>나를 위한 트렌드</h3>
      <Trand />
      <Trand />
      <Trand />
      <Trand /> 
      <Trand />
      <Trand />
      <Trand />
      <Trand />
      <Trand />
      <Trand />
    </div>
  )
}

export default TrendSection