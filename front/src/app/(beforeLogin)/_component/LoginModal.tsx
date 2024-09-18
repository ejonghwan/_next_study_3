"use client"

import React, { useState } from 'react';

const LoginModalPage = () => {

   const [id, setId] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');


   const handleSubmit = () => {};
   const handleClickClose = () => {};
   const handleChangeId = () => {};
   const handleChangePassword = () => {};
   const handleChangeMessage = () => {};

  return (
    <div style={{ border: "1px solid red" }}>
      <button type='button' onClick={handleClickClose}>닫기</button>
      <div>로그인 하세요</div>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='id'>id</label>
            <input type='text' id='id' onChange={handleChangeId} placeholder='' value={id}/>
         </div>
         <div>
            <label htmlFor='password'>password</label>
            <input type='password' id='password' onChange={handleChangePassword} placeholder='' value={password}/>
         </div>
         <div>
            <label htmlFor='message'>message</label>
            <input type='text' id='message' onChange={handleChangeMessage} placeholder='' value={message}/>
         </div>
         
         <div>message: {message}</div>
         <button type='button' disabled={!id && !password}>로그인 하기</button>
      </form>
    </div>
  )
}

export default LoginModalPage;