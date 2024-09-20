"use client"

import React from 'react'

const Tab = () => {

   const handleClickRec = () => {}
   const handleCLickFol = () => {}

  return (
    <div>
      <div>홈</div>
      <div>
         <div onClick={handleClickRec}>추천</div>
         <div onClick={handleCLickFol}>팔로우 중</div>
      </div>
      
    </div>
  )
}

export default Tab