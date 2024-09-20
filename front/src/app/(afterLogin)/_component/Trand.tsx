import Link from 'next/link'
import React from 'react'

const Trand = () => {
  return (
    <div>
      <Link href="/search?q=">
        <div>실시간 트렌드</div>
        <div>제로초</div>
        <div>포스트</div>
      </Link>
    </div>
  )
}

export default Trand