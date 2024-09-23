import React from 'react'

const UserName = ({ params }) => {

   console.log('useranme params', params)

   // 이 라우트 접속 시 실행돼서 res 받게끔
   // fetch(`back/${params.username}`) 

  return (
    <div>UserName: {params.username}</div>
  )
}

export default UserName