import React from 'react'
import Link from 'next/link'
import Nav from '@/app/(afterLogin)/_component/Nav'
import TrendSection from '@/app/(afterLogin)/_component/TrendSection'
import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend'
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton'
import RightSearchZone from '@/app/(afterLogin)/_component/RightSearchZone'

const AfterLoginLayout = ({ children, dk, ho, modal }: { children: React.ReactNode, modal: React.ReactNode, dk: React.ReactNode,  ho: React.ReactNode}) => {
  return (
    <div style={{ display: 'flex' }}>

    
      <div style={{ border: '1px solid red'}} >
        inter dk
        <div>{dk}</div>
      </div>


      <div style={{ border: '1px solid red'}} >
        inter ho
        <div>{ho}</div>
      </div>

      <div style={{ border: '1px solid red'}} >
        inter modal
        <div>{modal}</div>
      </div>

      <header style={{ width: '300px', border: '1px solid #666' }}>
        <h1>
          <Link href="/">logo</Link>
        </h1>
        <Nav />
        <div>
          <Link href={'/compose/tweet'}>게시하기</Link>
          <Link href={'/dkdk'}>dkdk</Link>
          <Link href={'/hoho'}>hoho</Link>
        </div>
        <div>
          <LogoutButton />
        </div>
      </header>

      <main style={{ border: "1px solid red" }}>
        {children}
      </main>

      <div style={{ border: "1px solid blue" }}>
        <RightSearchZone />
        <TrendSection />
        <div>
          <h3>팔로우 추천</h3>
          <FollowRecommend user={{nickname: 'hoho', id: 'zzz'}} />
          
        </div>
      </div>

    </div>
  )
}

export default AfterLoginLayout