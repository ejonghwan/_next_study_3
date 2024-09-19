import React from 'react'
import Link from 'next/link'
import Nav from '@/app/(afterLogin)/_component/Nav'
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton'

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex' }}>
      <header style={{ width: '300px', border: '1px solid #666' }}>
        <h1>
          <Link href="/">logo</Link>
        </h1>
        <Nav />
        <div>
          <Link href={'/compose/tweet'}>게시하기</Link>
        </div>
        <div>
          <LogoutButton />
        </div>
      </header>

      <main>
        {children}
      </main>

    </div>
  )
}

export default AfterLoginLayout