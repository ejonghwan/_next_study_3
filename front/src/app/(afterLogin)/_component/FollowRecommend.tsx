// import Image from 'next/image'
import React from 'react'

type Props = { user?: { nickname: string, id: string }, handleFollow?: () => void } 

const FollowRecommend = ({ user, handleFollow }: Props) => {
  return (
    <div>
      {/* <div><Image src={'/asd'} alt='hoho' width={100} height={100}/></div> */}
      <div>{user?.nickname}</div>
      <div>@{user?.id}</div>
      <button type='button' onClick={handleFollow}></button>
    </div>
  )
}

export default FollowRecommend