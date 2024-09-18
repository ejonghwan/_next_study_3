"use client"
import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main>
      홈 페이지
      <Link href="/home/test">페레럴 테스트</Link>
    </main>
  )
}

export default HomePage