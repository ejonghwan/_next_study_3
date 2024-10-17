type 헷갈리는거 
const onSubmit: FormEventHandler<HTMLFormElement> = () => {}
const onChange: ChangeEventHandler<HTMLInputElement> = () => {}




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




7. 클라이언트 컴포넌트("use client")도 서버에서 렌더링 됩니다. 헷갈리시면 안 돼요. 그래서 SSR도 됩니다.



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




14. dvh 디바이스 검색창 고려한 vh vw 단위.



15. route구분해서 네비액티브는 server-side에서 안됨

아래 두개의 segment를 받아서 처리
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'
   const segment = useSelectedLayoutSegment();
   const segments = useSelectedLayoutSegments();

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


15-1. route 구분 하는 또 한가지. 
- localhost:3000/ 여기부터 ? 쿼리스트링 앞까지 모두 반환
- client side에서만 작동

import { usePathname } from 'next/navigation'
const pathname = usePathname(); 

특정 컴포넌트 안쪽에 
if(pathname === '특정라우터명') return null 해주면 아래는 렌더링안함


15-2 searchParams 받아오는법 
  const searchParams = useSearchParams();
 router.replace(`/search?q=${searchParams.get('q')}`)
   router.replace(`/search?${searchParams.toString()}&f=live`)  -> 지금 있는거 다  쓰고 뒤에 추가




16. jsx에 onClick이 있으면 client 컴포넌트라고 보면 됨 
- 서버액션이 실험적이라 아직까지는 이벤트 리스너들은 클라이언트 컴포에서 처리




17. svg 복사하는법 
-개발자도구 엘리먼츠탭에서 svg 선택 
- 우클릭 후 복사 > outerHTML 복사



18. contextapi 최적화 ? 한번 알아보기




19. 페러렐 라우터 + 인터셉팅 라우터 버그 정리 



20. 부모는 client side인데 자식은 server side 일 때 children 활용 
호출하는 페이지는 server-side
Client 컴포넌트는 "use client"
<Client prop={prop}>
   <div>이 파일 자체는 server side </div>
</Client>

주의) 클라컴포에서 서버 컴포 import하면 서버컴포 성격이 변경됨. 위처럼 사용해야





21. 클릭되는 영역과 그 안에 a 태그가 있을 경우 캡쳐링 사용
<li  onClickCapture={clikcevt}>
  <a href={}> 
위의 경우 저 이벤트 사용하면 캡쳐링 방지 





22. 이미 import 되고 있는 export const 컴포넌트들 import 경로까지 자동으로 변경해주는 기능 
해당 코드 우클릭 > Refactor... > move




23. [].at(-1) 마지막꺼 가져오는거 까먹지말자 





24. .env .env.local 
.env는 실환경에서 실행 
.env.local은 개발환경에서 실행  

정확히 말하면 개발환경에선 둘 다 실행 
예를 들어 api 목업 셋팅을 .env에는 넣지않고 .env.local 에만 넣으면 로컬 개발환경에서만 실행됨

NEXT_PUBLIC_ 이 붙으면 클라이언트 사이드(src 안에 폴더)에서도 접근가능. 붙지 않으면 서버 사이드에서만 접근가능 
또 NEXT_PUBLIC_ 이 붙으면 브라우저에서도 볼 수 있기에 비밀키 같은건 붙이면 안됨!!



25. if (typeof window !== 'undefined') {} 
윈도우가 'undefined' 가 아니라는건 클라이언트 환경이라는 뜻. 즉 서버 컴포넌트가 아니라는 뜻




26. fetch 옵션에 credentials: 'include' 가 있어야 쿠키전달됨 까먹지말자



27. redirect()는 트라이캐치문 안에 있으면 절대안됨!!!!
try 에서 성공 시 변수에 트루값 주고 가장 하단에서 트루면 리다이렉트 실행되게 



28. 서버 액션은 서버컴포넌트에서 실행할 수도 있고 클라이언트 컴포넌트에서도 실행할 수 있다



29. useFormState 와 useFormStatus 
리액트에서 지원하는 비동기 관리 훅스

import { useFormState, useFormStatus } from 'react-dom'


const onSubmit = (prevState: any, formData: FormData) => {...api 요청코드}
const [state, formAction] = useFormState(onSubmit, { message: null });
const { padding } = useFormStatus();



<form action={formAction}>
   ...
</form> 






30. next auth 
https://next-auth.js.org/getting-started/introduction

아래 두 파일 참고 
src > auth.ts 
src > middleware.ts


server side에서 import와 client side import 다름
server side: import { signin } from '@/auth.ts' 
client side: import { signin } from 'next-auth/react'




31. catch all route. 슬러그 모두 가져오기 
file : app/shop/[...slug]/page.js
ex   : /shop/a/b/c  =>  { slug: ['a', 'b', 'c'] } 




32. front back 나누는 이유 
nextjs를 이용해서 작은 서비스는 프론트에서 api요청 응답처리를 모두 할 수 있지만 
서비스 규모가 커지면 front요청과 back요청이 다를 수 있음. 
back 요청이 많을 시 back서버만 늘리고  
front 요청이 많을 시 front서버만 늘리면 됨. 

하지만 두개를 하나의 서버에서 처리하면 늘릴 때 같이 늘려야하기 때문에 기능별로 분리하는 것




33. tanstack query
const clientValue = useQuery({ queryKey: ['poosts'], queryFn: getPosts });
query key가 올때 queryFn을 실행한다는 의미 

왜 redux를 안쓰고 tanstack query 혹은 swr 로 데이터를 관리하냐 ? 

[역할]
..탄스택쿼리의 핵심은 데이터를 가져오는 것.
- 데이터를 가져와서 컴포넌트간에 공유도 가능. Query.getClient 
- 아니면 데이터는 탄스택쿼리, 컴포넌트간의 상태 공유는 redux나 context API, zustand 중 하나와 섞어사용 가능

..리덕스의 핵심은 컴포넌트 간의 상태를 공유 하는 것.
- 리덕스도 saga를 이용해서 데이터를 가져올 수 있고 관리 및 캐싱이 가능하지만 약함.


[캐싱]
탄스택쿼리는 데이터를 가져와서 캐싱하는 것이 강력한 기능
어떤 뉴스기사나 블로그 글은 매번 바뀌는 것이 아니기 떄문에 
일주일에 한번씩 업데이트를 한다거나, 수정액션이 일어났을 때 변경되면 되는 것. 
때문에 평소엔 데이터 요청을 보내지 않고 캐싱되어있는 곳에서 꺼내 쓰다가 글이 수정되었을 때 
db와 캐싱되어있는 메모리에 모두 업데이트 시키는 것이 좋은 방법


[결론]
- 탄스택쿼리
데이터를 가져와서 캐싱하는 강력한 도구.
컴포넌트 간 데이터 공유도 가능하긴함. 
비동기에 꼭 필요한 로딩, 성공, 실패가 패키지처럼 표준화함
query key도 잘 조합해서 한번에 캐싱 및 초기화 할 수 있는 장점

- redux나 context API, zustand 등 
컴포넌트 간 상태나 데이터 공유 목적


[탄스택쿼리상태]
- Fresh 
기본적으로 데이터 불러오면 fresh. 캐시된 곳에서 가져와서 사용해도됨. 
신선한 데이터 상태. 데이터 상태가 언제까지 fresh일지는 개발자가 정함.
하지만 기본적으로 모든 데이터는 fresh 상태가 아님.


- Stale
데이터를 불러오는 순간부터 스테일. 
얘는 언제라도 기회가 되면 새로 데이터를 가져와라 이런 뜻
기회란, 아래 세개의 상태가 기준. 세개 중 만족하는 조건이라면 데이터를 새로 가져옴.

{
   refetchOnWindowFocus: false, // 브라우저 다른탭 갔다가 다시 해당 사이트탭으로 돌아왔을 때
   retryOnMout: true, // 컴포넌트가 언마운트 되었다가 마운트 되었을 때
   refetchOnReconnect: false, // 인터넷 접속이 끊겼다가 다시 접속이 되는 순간
   retry: false // 데이터를 가져올 때 실패했다면 몇번정도 다시 재시도를 할지 
}

이 옵션들은 전역으로 설정할 수도, useQuery로 따로 설정할 수도 있음.



[hook 사용법]
const { data } = useQuery<IPost[]>({
   queryKey: ['posts', 'recommentds'],
   queryFn: getPostRecommentds,
   staleTime: 60 * 1000, // fresh에서 stale로 변경되는 시간이 5분이라는 뜻. 5분까지는 fresh한 상태. 즉 캐싱된 데이터사용
   gcTime: 60 * 1000, // 기본 5분
   enabled: !!session?.user // 유저가 있을 때만 useQuery 실행 
})

- staleTime
즉, 5분 동안은 fresh이기 때문에 서버에서 가져오는 게 아니라 메모리에 캐시된 데이터에서 가져온다는 뜻. 
때문에 매우 빠름.


- inactive
그리고 inactive는 현재 보는 화면에서 해당 데이터를 사용하지 않으면 data는 inactive로 이동 
예를 들어 home에서 위의 데이터를 불러와서 보다가 다른 페이지로 이동 시 불러온 posts 데이터는 inactive로 이동하게 됨. 
posts data가 inactive로 이동하여도 다시 home으로 이동 시 캐시된 곳에서 가져옴 (stale이 되면 서버에서 가져옴)


- gcTime
inactive는 gcTime과 같이 봐야하는데, 가비지컬렉터 시간이라는 뜻으로 
메모리에 캐싱된 데이터들을 언제까지 보관할건지 설정하는 시간
inactive에 들어가 있는 애들은 설정된 시간 후에 모두 메모리에서도 삭제됨

- 순서
home에서 posts 데이터를 가져온 후 페이지 이동 시 inactive에 들어가는데 
그 즉시 해당 posts 데이터는 gcTime 카운팅이 시작됨. 

- 중요. staleTime은 gcTime보다 항상 짧아야함
예를 들어 staleTime은 5분 gcTime은 3분이라고 했을 때, 5분 동안은 캐싱되어 있는 데이터를 사용하기로 했는데 
페이지 이동을 해서 해당 데이터가 inactive에 들어가는 순간 gcTime이 카운팅 되기 때문에 3분 후에 메모리에서 제거됨. 
그럼?? 3분 후 사용자가 다시 home에 와서 staleTime에 2분이 남았으니 캐시에서 데이터를 가져와야 하지만 
inactive에 들어간 순간 카운팅이 되어 3분 후 데이터가 삭제되었기 떄문에 가져올 수 없게됨  


- fetching 
데이터를 가져올 때 표시됨. 순간적으로 1되어있는 걸 거의 못봄


- paused 
데이터 가져올 때 잠시 멈출수있는 기능
오프라인일때, 인터넷 끊겼을 때


- devtools actions
1. refetch : 데이터 무조건 새로 가져옴
2. invalidate : 누르면 상단 observer에 사용하고 있는 querykey가 들어감. 
현재 페이지에서 사용하고 있다면 옵저빙하고 있다가 다시 해당 페이지 왔을 때 캐시되고 있는 곳에서 가져옴. refetch보다 효율적  
다만 캐시타임이 지나 inactive인 것은 안가져옴
3. reset : useQuery설정 시 초기 데이터가 있는 경우엔 초기데이터로, 없을 땐 그냥 새로가져옴. initialData: () => []
4. remove : 쿼리키 제거
5. loading : 로딩상태일떄 보기
6. trigger Error : 에러상태일 때 보기


```typescript
type ex)
import { Post as IPost } from 'model~'
import { getSearchResult } from 'lib~'

type = { searchParams: { q: string, f?: string, pf?: string } };

const SearchResult = ({ searchResult }: Props) => {

   // 다이나믹한 쿼리키를 받을 땐 4번쨰 자리가 해당 타입
   const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Porps['searchParams']]>({
       // queryKey짜는 것도 중요. 이렇게 적으면 searchParams 부분은 검색어가 3번쨰 배열로 들어감.
       // 그리고 queryKey에 적은 배열이 queryFn 인자로 넘어감.
      queryKey: ["post", "search", searchParams], 
      queryFn: getSearchResult,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
   })
}
```

getSearchResult file
```typescript
// { queryKey } 인자는 위에 queryFn에 들어간 queryKey
export const getSearchResult: QueryFunction<Post[], [_1: string, _2: string, searchParams: { q: string, pf?: string, f?: string }]>
 = async ({ queryKey }) => {
   const [_1, _2, searchParams] = queryKey;
   const res = await fetch(`url/${searchParams.q}?${searchparams.toString()}`, {
      next: {
         tags: ['posts', 'search', searchParams.q]
      },
      cache: 'no-store'
   })

   if(!res.ok) {
      throw new Error('e')
   }

   return res.json();
}


// 검색할떄 useQuery stailtime 길게주면 검색 시 캐싱하니 메모리 많이 먹음. 
// 적당히 주고 캐시타임 적게줘서 리셋
```




34. revalidateTag, revalidatePath 
revalidateTag : next fetch 보낼 때 태그를 지정해서 해당 태그만 캐시를 삭제 
revalidatePath : 그 페이지에서 보내는 요청 자체를 모두 캐시 삭제

참고로 next fetch tag는 서버쪽 캐시이기 떄문에 react-query랑 다름. react-query는 클라이언트쪽에서 캐싱이 강력한 도구

ex)
import { revalidateTag, revalidatePath } from 'next/cache'
revalidateTag(tagname) /fetch next: { tag: ['posts'] }
revalidatePath(pathname) /home





35. modal에 I붙이는건 인터페이스라는 의미 
import { Post as IPost } from '@/modal/post.ts'

인터페이스는 객체를 타이핑할떄 많이 씀
