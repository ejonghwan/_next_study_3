"use client"

import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link';


const NavPage = () => {

   const segment = useSelectedLayoutSegment();
   // const segments = useSelectedLayoutSegments();

   // segment : layout 기준으로 첫번째 폴더
   // ex) 아래의 경우 두번째 루트에 들어가도 세그먼트는 test1, test2를 반환
   // test1/innertest1
   // test2/innertest2
   // layout.tsx 
   
   // segments : layout 기준으로 모든 폴더  
    // ex) 아래의 경우 해당 루트에 들어가면 세그먼츠는 test1/inntertest1, test2/innertest2를 모두 반환
   // test1/innertest1
   // test2/innertest2
   // layout.tsx 


   const me = { // 임시로 내 정보 있는것처럼
      id: 'jong'
    }
  return (
    <div>
      <ul>
      <li>
        <Link href="/home">
          <div>
            {segment === 'home' ? (
                <>
                  <div style={{fontWeight: 'bold'}}>홈</div>
               </>
            ) : (
               <>
                  <div>홈</div>
               </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div>
            {segment && (['search', 'explore'].includes(segment)) ? (
                <>
                  <div style={{fontWeight: 'bold'}}>탐색하기</div>
               </>
            ) : (
               <>
                  <div>탐색하기</div>
               </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div>
            {segment === 'messages' ? (
               <>
                  <div style={{fontWeight: 'bold'}}>쪽지</div>
               </>
            ) : (
               <>
                  <div>쪽지</div>
               </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && <li>
        <Link href={`/${me?.id}`}>
          <div>
            {segment === me.id ? (
               <>
                  <div style={{fontWeight: 'bold'}}>프로필</div>
               </>
            ) : (
               <>
                  <div>프로필</div>
               </>
            )}
          </div>
        </Link>
      </li>}
      </ul>
    </div>
  )
}

export default NavPage