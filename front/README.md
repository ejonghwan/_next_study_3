

1. (name) 은 그룹핑 할 수 있으며 레이아웃을 만들 수 있다
   - 그룹핑, 페럴레 라우팅, 인터셉팅 라우팅은 폴더 경로를 무시하니 주의   _ () @ 폴더들은 무시


2. layout은 리렌더링이 되지 않고 그 안에 컴포넌트만 리렌더링이 된다 
   - 레이아웃도 리렌더하고싶으면 tamplate.tsx로 만들면 된다.  둘 중 하나
   - 템플릿은 페이지를 넘나들떄 기록을 해야된다거나...혹은 구글 애널리틱스 할 떄 

3. next 에선 a 태그를 쓰면 새로고침하면서 넘어간다 link를 쓰자

4. 이미지는 png도 import 할 수 있다. 이미지 최적화는 Image 컴포를 쓰자 
 <Image
   className={styles.logo}
   src="https://nextjs.org/icons/next.svg"
   alt="Next.js logo"
   width={180}
   height={38}
   priority
/>


5. 패럴레 라우트 = children 말고 layout에 다른 라우팅 추가 (라우팅이 변경되어도 뒤에 어떤 페이지를 띄운 상태로 다른 라우팅을 띄우는 방법...)
기존 모달과는 다른게 모달은 라우팅 주소가 변경되지 않지만 패럴레 라우팅은 라우팅 주소까지 변경됨. 근데 뒤에 페이지는 그대로 남아있음
@ 주의점은 띄우고 싶은 페이지와 같은 루트에 있어야함. 

@modal/page.tsx <- 띄워지는 라우팅
page.tsx  -> 뒤에 있는 페이징
layout.tsx -> props으로 @name을 받으면 됨. { children, modal }  후에 <div>{children} {modal}</div>


6. 인터셉팅 라우터 
인터셉팅 라우터는 기존 경로를 link로 이동할 때 혹은 url로 들어올 때 인터셉팅 하는 것 
(.)name  => 현재 경로 
(..)name => 부모 경로 
다만 _ () @ 디렉토리는 무시

ex) 아래같은 경우 link나 router로 왔을 땐 아래 라우팅이 보여지고 그 자리에서 새로고침 혹은 url직접 치고오면 시 본 페이지가 보여짐
/i/flow/login/page.tsx
(.)i/flow/login/page.tsx 




7. 클라이언트 컴포넌트("use client")도 서버에서 렌더링 됩니다. 헷갈리시면 안 돼요. 그래서 SSR도 됨



8. 경로가 다 올바른데 에러뜨는 경우는 캐시가 잘못되었을수 있으니 서버재시작



9. default.tsx => page.tsx와 동일하지만 아무 것도 내뱉지않을 때 사용 (페럴레 라우트가 필요없을 때 사용 or 페럴레 라우트 기본값)
예전에 nuxt.js 작업할 때 비슷한 오류
@modal / page.tsx 였는데 
@modal / i / flow / login / page.tsx 로 변경되었으니 
@modal 에는 page.tsx가 없어서  localhost:3000/경로에서는  layout에 있는 { modal } prop에서 modal을 찾을 수 없다고 뜬거.
그래서 @modal에 default.tsx 혹은 page.tsx 넣어줘야함

위에꺼 중요!!



10. 서버컴포넌트에서 클라이언트 컴포넌트를 임폴트해도 되지만 클라컴포에서는 서버컴포를 임폴트 하면 임폴트된 서버 컴포는 클라컴포로 변경됨.
(이건 테스트 해봐야할듯? )



11. privite components => app안에 컴포넌트파일을 만들어 사용할 수 있는듯. 
페레럴 + 인터셉팅 로그인 모달이 중복되어 하나로 합침 

아래 경로에 있는 jsx를 컴포넌트로 뺴서 가져다씀.. 아래 페이지에서는 컴포넌트 호출만.
(beforeLogin)/@modal/(.)i/flow/login/page.tsx 
(beforeLogin)/i/flow/login/page.tsx




12. page는 서버 컴포넌트인게 좋음



13. 서버에서 동작하는 리다이렉트와 클라이언트에서 동작하는 라우트 구분 잘해야함. 
## 서버사이드에서 돌아가는 리다이렉트 (클라에선 안먹음)
import { redirect } from 'next/navigation'
redirect('/i/flow/login');

## 클라이언트 사이드에서 돌아가는 리다이렉트  (서버에선 안먹음)
import { useRouter } from 'next/navigation'
const router = useRouter();
router.replace('/login')

// ## router.push
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login 
// - 하나 뒤로 이동. 때문에 2번째에서 어딘가로 보냈다면 계속 무한 반복됨 

// ## router.replace
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login
// - history 안남김. 때문에 2번째에서 어딘가로 보내도 다시 처음으로 이동. 위 같은 경우는 replace가 맞음






