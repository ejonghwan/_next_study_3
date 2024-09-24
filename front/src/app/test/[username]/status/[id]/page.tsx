import React from 'react'

type Props = { params: { username: string, id: string } }

const IdPage = ({ params }: Props) => {

   console.log('id params?', params)
   // 이 라우트 접속 시 실행돼서 res 받게끔
   // fetch(`back/${username}/status/${params.id}`) 

  return (<>
    <div>IdPage: {params.username}</div>
    <div>IdPage: {params.id}</div>
    </>
  )
}

export default IdPage