"use client"

import { useRouter } from 'next/navigation'
import Main from '@/app/(beforeLogin)/_component/Main'



const LoginPage = () => {

   const router = useRouter();
   router.replace('/i/flow/login')
   return (
      <>
       <Main />
      </>
   )
}

export default LoginPage




// router.push
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login 

// - 하나 뒤로 이동. 때문에 2번째에서 어딘가로 보냈다면 계속 무한 반복됨 


// router.replace
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login

// - history 안남김. 때문에 2번째에서 어딘가로 보내도 다시 처음으로 이동. 위 같은 경우는 replace가 맞음