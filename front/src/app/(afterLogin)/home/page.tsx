"use client"
import React from 'react'
// import Link from 'next/link'
import Tab from '@/app/(afterLogin)/_component/Tab'
import TabProvider from '@/app/(afterLogin)/_component/TabProvider'
import Post from '@/app/(afterLogin)/_component/Post'
import PostForm from '@/app/(afterLogin)/_component/PostForm'

const HomePage = () => {
  return (
    <div>
      <TabProvider>
        <PostForm />
        <Tab />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <Link href="/home/test">페레럴 테스트</Link> */}
      </TabProvider>
    </div>
  )
}

export default HomePage