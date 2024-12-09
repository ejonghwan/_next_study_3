type 헷갈리는거 
const onSubmit: FormEventHandler<HTMLFormElement> = () => {}
const onChange: ChangeEventHandler<HTMLInputElement> = () => {}


# Nextjs  

## (괄호)
1. (name) 은 그룹핑 할 수 있으며 레이아웃을 만들 수 있다
   - 그룹핑, 페럴레 라우팅, 인터셉팅 라우팅은 폴더 경로를 무시하니 주의   _ () @ 폴더들은 무시


## layout
2. layout은 리렌더링이 되지 않고 그 안에 컴포넌트만 리렌더링이 된다 
   - 레이아웃도 리렌더하고싶으면 tamplate.tsx로 만들면 된다.  둘 중 하나
   - 템플릿은 페이지를 넘나들떄 기록을 해야된다거나...혹은 구글 애널리틱스 할 떄 


## a Link
3. next 에선 a 태그를 쓰면 새로고침하면서 넘어간다 link를 쓰자



## Image
4. 이미지는 png도 import 할 수 있다. 이미지 최적화는 Image 컴포를 쓰자 
 <Image
   className={styles.logo}
   src="https://nextjs.org/icons/next.svg"
   alt="Next.js logo"
   width={180}
   height={38}
   priority
/>


## 페러럴 라우트
5. 패러렐 라우트 = children 말고 layout에 다른 라우팅 추가 (라우팅이 변경되어도 뒤에 어떤 페이지를 띄운 상태로 다른 라우팅을 띄우는 방법...)
기존 모달과는 다른게 모달은 라우팅 주소가 변경되지 않지만 패럴레 라우팅은 라우팅 주소까지 변경됨. 근데 뒤에 페이지는 그대로 남아있음
@ 주의점은 띄우고 싶은 페이지와 같은 루트에 있어야함. 

@modal/page.tsx <- 띄워지는 라우팅
page.tsx  -> 뒤에 있는 페이징
layout.tsx -> props으로 @name을 받으면 됨. { children, modal }  후에 <div>{children} {modal}</div>


## 인터셉팅 라우터
 
인터셉팅 라우터는 기존 경로를 link로 이동할 때 혹은 url로 들어올 때 인터셉팅 하는 것 
(.)name  => 현재 경로 
(..)name => 부모 경로 
다만 _ () @ 디렉토리는 무시

ex) 아래같은 경우 link나 router로 왔을 땐 아래 라우팅이 보여지고 그 자리에서 새로고침 혹은 url직접 치고오면 시 본 페이지가 보여짐
/i/flow/login/page.tsx
(.)i/flow/login/page.tsx 



## use client
7. 클라이언트 컴포넌트("use client")도 서버에서 렌더링 됩니다. 헷갈리시면 안 돼요. 그래서 SSR도 됩니다.



## 에러
8. 경로가 다 올바른데 에러뜨는 경우는 캐시가 잘못되었을수 있으니 서버재시작


## default.tsx
9. default.tsx => page.tsx와 동일하지만 아무 것도 내뱉지않을 때 사용 (페럴레 라우트가 필요없을 때 사용 or 페럴레 라우트 기본값)
예전에 nuxt.js 작업할 때 비슷한 오류
@modal / page.tsx 였는데 
@modal / i / flow / login / page.tsx 로 변경되었으니 
@modal 에는 page.tsx가 없어서  localhost:3000/경로에서는  layout에 있는 { modal } prop에서 modal을 찾을 수 없다고 뜬거.
그래서 @modal에 default.tsx 혹은 page.tsx 넣어줘야함

위에꺼 중요!!



## 클라컴포에서 서버컴포 import 시 
10. 서버컴포넌트에서 클라이언트 컴포넌트를 임폴트해도 되지만 클라컴포에서는 서버컴포를 임폴트 하면 임폴트된 서버 컴포는 클라컴포로 변경됨.
(이건 테스트 해봐야할듯? )



## _components
11. privite components => app안에 컴포넌트파일을 만들어 사용할 수 있는듯. 
페레럴 + 인터셉팅 로그인 모달이 중복되어 하나로 합침 

아래 경로에 있는 jsx를 컴포넌트로 뺴서 가져다씀.. 아래 페이지에서는 컴포넌트 호출만.
(beforeLogin)/@modal/(.)i/flow/login/page.tsx 
(beforeLogin)/i/flow/login/page.tsx



## 걍 팁
12. page는 서버 컴포넌트인게 좋음



## 리다이렉트
13. 서버에서 동작하는 리다이렉트와 클라이언트에서 동작하는 라우트 구분 잘해야함. 
### 서버사이드에서 돌아가는 리다이렉트 (클라에선 안먹음)
import { redirect } from 'next/navigation'
redirect('/i/flow/login');

### 클라이언트 사이드에서 돌아가는 리다이렉트  (서버에선 안먹음)
import { useRouter } from 'next/navigation'
const router = useRouter();
router.replace('/login')

// ## router.push
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login 
// - 하나 뒤로 이동. 때문에 2번째에서 어딘가로 보냈다면 계속 무한 반복됨 

// ## router.replace
// localhost:3000 => localhost:3000/login => localhost:3000/i/flow/login
// - history 안남김. 때문에 2번째에서 어딘가로 보내도 다시 처음으로 이동. 위 같은 경우는 replace가 맞음



## dvh
14. dvh 디바이스 검색창 고려한 vh vw 단위.



## route 메서드도 클라 서버 컴포넌트 구분
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


추가 팁.
 



## client 
16. jsx에 onClick이 있으면 client 컴포넌트라고 보면 됨 
- 서버액션이 실험적이라 아직까지는 이벤트 리스너들은 클라이언트 컴포에서 처리



## 걍 팁 
17. svg 복사하는법 
-개발자도구 엘리먼츠탭에서 svg 선택 
- 우클릭 후 복사 > outerHTML 복사


## context API 최적화
18. contextapi 최적화 ? 한번 알아보기



## 버그
19. 페러렐 라우터 + 인터셉팅 라우터 버그 정리 



## client side에서 server side 사용하기
20. 부모는 client side인데 자식은 server side 일 때 children 활용 
호출하는 페이지는 server-side
Client 컴포넌트는 "use client"
<Client prop={prop}>
   <div>이 파일 자체는 server side </div>
</Client>

주의) 클라컴포에서 서버 컴포 import하면 서버컴포 성격이 변경됨. 위처럼 사용해야 됨




## 캡쳐링 
21. 클릭되는 영역과 그 안에 a 태그가 있을 경우 캡쳐링 사용
<li  onClickCapture={clikcevt}>
  <a href={}> 
위의 경우 저 이벤트 사용하면 캡쳐링 방지 




## 에디터 팁
22. 이미 import 되고 있는 export const 컴포넌트들 import 경로까지 자동으로 변경해주는 기능 
해당 코드 우클릭 > Refactor... > move



## 배열 끝 찾기 팁
23. [].at(-1) 마지막꺼 가져오는거 까먹지말자 




## env
24. .env .env.local 
.env는 실환경에서 실행 
.env.local은 개발환경에서 실행  

정확히 말하면 개발환경에선 둘 다 실행 
예를 들어 api 목업 셋팅을 .env에는 넣지않고 .env.local 에만 넣으면 로컬 개발환경에서만 실행됨

NEXT_PUBLIC_ 이 붙으면 클라이언트 사이드(src 안에 폴더)에서도 접근가능. 붙지 않으면 서버 사이드에서만 접근가능 
또 NEXT_PUBLIC_ 이 붙으면 브라우저에서도 볼 수 있기에 비밀키 같은건 붙이면 안됨!!



## 클라이언트 환경 확인
25. if (typeof window !== 'undefined') {} 
윈도우가 'undefined' 가 아니라는건 클라이언트 환경이라는 뜻. 즉 서버 컴포넌트가 아니라는 뜻



## 쿠키전달할떄 팁
26. fetch 옵션에 credentials: 'include' 가 있어야 쿠키전달됨 까먹지말자



## 트라이 캐치안에 리다이렉트 있으면 안됨
27. redirect()는 트라이캐치문 안에 있으면 절대안됨!!!!
try 에서 성공 시 변수에 트루값 주고 가장 하단에서 트루면 리다이렉트 실행되게 


## 서버액션
28. 서버 액션은 서버컴포넌트에서 실행할 수도 있고 클라이언트 컴포넌트에서도 실행할 수 있다



## 비동기 훅스
29. useFormState 와 useFormStatus 
리액트에서 지원하는 비동기 관리 훅스

import { useFormState, useFormStatus } from 'react-dom'


const onSubmit = (prevState: any, formData: FormData) => {...api 요청코드}
const [state, formAction] = useFormState(onSubmit, { message: null });
const { padding } = useFormStatus();



<form action={formAction}>
   ...
</form> 





## next auth
30. next auth 
https://next-auth.js.org/getting-started/introduction

아래 두 파일 참고 
src > auth.ts 
src > middleware.ts


server side에서 import와 client side import 다름
server side: import { signin } from '@/auth.ts' 
client side: import { signin } from 'next-auth/react'



## 파람스 여러개 넣기
31. catch all route. 슬러그 모두 가져오기 
file : app/shop/[...slug]/page.js
ex   : /shop/a/b/c  =>  { slug: ['a', 'b', 'c'] } 



## 서버 나누는 이유
32. front back 나누는 이유 
nextjs를 이용해서 작은 서비스는 프론트에서 api요청 응답처리를 모두 할 수 있지만 
서비스 규모가 커지면 front요청과 back요청이 다를 수 있음. 
back 요청이 많을 시 back서버만 늘리고  
front 요청이 많을 시 front서버만 늘리면 됨. 

하지만 두개를 하나의 서버에서 처리하면 늘릴 때 같이 늘려야하기 때문에 기능별로 분리하는 것



## 탄스택 쿼리
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
const queryClient = useQueryClient();
const post = queryClient.getQueryData(['posts', id]);

const { data } = useQuery<IPost[]>({
   queryKey: ['posts', 'recommentds'],
   queryFn: getPostRecommentds,
   staleTime: 60 * 1000, // fresh에서 stale로 변경되는 시간이 5분이라는 뜻. 5분까지는 fresh한 상태. 즉 캐싱된 데이터사용
   gcTime: 60 * 1000, // 기본 5분
   enabled: !!session?.user // 유저가 있을 때만 useQuery 실행 
   enabled: !!post // 만약 post를 getQueryData로 호출했다면 이렇게 써도 가능. post 데이터가 없을 시 실행안함
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


## 탄스택쿼리 SSR prefetchQuery
- 서버에서 탄스택쿼리 데이터 먼저 불러오기 위해 사용 
1: page 서버컴포넌트에서 탄스택쿼리 데이터 미리 불러옴  (HydrationBoundary으로 감싸줌 + dehydratedState)
2: 컴포에서 useQuery로  데이터 호출 
3: queryFn으로 호출

```typescript

// src/app/(afterLogin)/[username]/page.tsx  
type Props = { { username: string  } }
const Profile = async ({ params }: Props) => {
   const { username: string } = params
   const queryClient = new QueryClient();
   await queryClient.prefetchQuery({ queryKey: ['users', username], queryFn: getUser })
   await queryClient.prefetchQuery({ queryKey: ['posts', 'users', username], queryFn: getUserPosts })
   const dehydratedState = dehydrate(queryClient) 

   return (
      <main>
         <HydrationBoundary state={dehydratedState}> 
            ...userInfo
            ...
            <div>
               <UserPosts username={username} />
            </div>
         </HydrationBoundary>
      </main>
   )
}
```

```typescript
// userPosts.tsx components
type Props = { username: string  }
const UserPosts = async ({ username }: Props) => {
   
   const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
      queryKey: ['posts', 'users', username],
      queryFn: getUserPosts,
      staleTime: 60 * 1000, // 5분
      gcTime: 300 * 1000
   })

   return (
      data?.map((post) => <Post key={post.postId} post={post} />)
   )
}
```

```typescript
// getUserPosts.ts file

import { QueryFunction } from "@tanstack/query-core"
import { Post } from '@model/Post'

export const getUserPosts: QueryFunction<Post[], [_1: string, _2: string, string]> = async ({ queryKey }) => {
   
   const [ _1, _2, username ] = queryKey; 
   const res = await fetch(`http://localhost:9090/api/users/${username}/posts`, {
      next: {
         tags: ['posts', 'users', username]
      },
      cache: 'no-store'
   })

   if(!res.ok) {
      throw new Error('failed to fetch data')
   }

   return res.json();

}

```

## 무한스크롤 react-query (SSR)
```typescript


// home.txs
const Home = async () => {
   const queryClient = new QueryClient();
   const queryClient.prefetchInfiniteQuery({
      queryKey: ['posts', 'recommends'],
      queryFn: getPostRecommends,
      initialPageParam:0 // 
   })
}

// 사용하는 컴포넌트 
const PostRecommends = () => {
   // 4번째 타입은 queryKey임. 5번쨰는 pageParam 자리
   const { 
      data, 
      fetchNextPage, // 다음페이지 가져오라는 명령 함수  
      hasNextPage, // 다음 페이지의 존재 유무 1,2,3,4,5  6,7,8,9  면 4개만 왔기 떄문에 다음페이지 없다고 인식
      isFetching // 데이터 불러오는 동안
      } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
      queryKey: ['posts', 'recommends'],
      queryFn: getPostRecommends,
      initialPageParam: 0, //처음 
      getNextPageParam: (lastPAge) => lastPage.at(-1)?.postId// 마지막인데 그냥 숫자를 적으면 안되는 이유는 중간에 삭제할수도 있기 떄문.
      // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]] 실제로 이렇게 2차원 배열로 관리함.
      // 위에서 5 10 15 마지막숫자가 lastPage.at(-1)이 됨  
      staleTime: 60 * 1000 // 5분
      gcTime: 300 * 1000
   }) 

   // 2차원 배열이라 아래 소스도 2차원 배열로 돌려줘야함 
   // return data?.map((post) => (
   //    <Post key={post.postId} post={post} />
   // ))



   return data?.pages.map((page, idx) => (
      <Fragment key={idx}>
         page.map((post) => <Post key={post.postId} post={post} />)
      </Fragment>
   ))
}


// api 요청하는 곳 
const getPostRecommends = ({ pageParam }: Props) => { //react-query에서 queryFn으로 넘기면 여기 들어와있음
   const res = await fetch(`http~/api/postRecommends?cursor=${pageParam}`, {
      next: {
         tags: ['posts', 'recommends'],
      },
      cache: 'no-store'
   })
   
   if(!res.ok) {
      throw new Error('failed to fetch data')
   }

   return res.json();
}



// intersection observer 사용하기
// npm i react-intersection-observer 모듈 사용 

import { useInView } from 'react-intersection-observer'

const {data, fetchNextPage, hasNextPage, isFetching} = useInfiniteQuery() ...생략

const { ref, inView } = useInView({
   threshold: 0, // ref 타겟이 보이고 몇px 이후에 호출할건지 
   delay: 0, // 타겟이 보이고 몇초 후에 될건지. 그리고 0이면 두번씩 호출되는데 조금 주는게 좋을듯 
})

useEffect(() => {
   if(inView) {
      !isFetching && hasNextPage && fetchNextPage();  
      // hasNextPage 다음페이지가 존재할 때 가져옴
      // isFetching은 데이터 가져오는 동안 똑같은거 가져오지말라고 
   } 
}, [inView, hasNextPage, fetchNextPage, isFetching])

// inview가 처음엔 false였다가 타겟이 보이면 true가 됨

return (
   <>
      data?.pages.map((page, idx) => (
         <Fragment key={idx}>
            page.map((post) => <Post key={post.postId} post={post} />)
         </Fragment>
      ))
      <div ref={ref} style={{ height: '50px' }}></div> // 얘한테 도달하면 이벤트 발생
   </>
)


// 팁 ) 그리고 같은 페이지 안에서는 스크롤 위치를 저장하지만 라우터 이동하면 저장이 풀림


```


## fetch 옵션 캐싱기능. fetch 캐싱은 서버쪽임
34. revalidateTag, revalidatePath 
revalidateTag : next fetch 보낼 때 태그를 지정해서 해당 태그만 캐시를 삭제 
revalidatePath : 그 페이지에서 보내는 요청 자체를 모두 캐시 삭제

참고로 next fetch tag는 서버쪽 캐시이기 떄문에 react-query랑 다름. react-query는 클라이언트쪽에서 캐싱이 강력한 도구

ex)
import { revalidateTag, revalidatePath } from 'next/cache'
revalidateTag(tagname) /fetch next: { tag: ['posts'] }
revalidatePath(pathname) /home




## 타입 이름바꿀 떄 팁
35. modal에 I붙이는건 인터페이스라는 의미 
import { Post as IPost } from '@/modal/post.ts'

인터페이스는 객체를 타이핑할떄 많이 씀



## 타입 스크립트에서 객체 표현하는 방법
- Object는 모든 값. 객체를 표현하려면 object 소문자로 적어야함 





## test 

1) .env 파일 : 모든 환경에서 공통적으로 적용할 디폴트 환경변수를 정의한다. 가장 우선순위가 낮다.
2) .env.development 파일: 개발 환경(process.env.NODE_ENV === 'development') 에서 적용된다.
3) .env.production 파일: 배포/빌드 환경(process.env.NODE_ENV === 'production') 에서 적용된다.
4) .env.test 파일: 테스트 환경(process.env.NODE_ENV === 'test') 에서 적용된다.
5) .env.local 파일 : 가장 우선순위가 높다. 다른 파일들에 정의된 값들을 모두 덮어쓴다.(오버라이드)



## 실험 1 
SSR에서 데이터 받아서 CSR에 data props으로 넘기면 데이터는 CSR일지 ?? 
=> data request 자체는 SSR에서 했기 때문에 SSR로 작동


## 실험 2 
CSR에서 바로 호출한 데이터는 ? 
=> html 파일에는 호출되어 보이지 않음.. 근데 일반 택스트들은 그냥 보이는 듯 ?

## 실험 3 
### CSR 컴포넌트에서 SSR 컴포넌트 호출해보기 (no children)
=> 무한 호출되면서 아래 같은 워닝이 뜸 
경고: async/await는 아직 클라이언트 구성 요소에서는 지원되지 않으며 서버 구성 요소에서만 지원됩니다. 이 오류는 원래 서버용으로 작성된 모듈에 '클라이언트 사용'을 실수로 추가하여 발생하는 경우가 많습니다. 오류 구성요소 스택

```typescript
    <CSRChildren />  //안에서  SSRChildren 호출
```

### CSR 컴포넌트에서 SSR 컴포넌트 호출해보기 (children)
=> SSR로 잘 호출 됨 


```typescript
    <CSRChildren>
        <SSRChildren /> 
    </CSRChildren>
```




## onBlur에서 e.relatedTarget 기억하기 
다음 포커스 타겟임.

e.target //지금 찍은 타겟
e.currentTarget // 원래 타겟 (고정)
e.relatedTarget // 다음 타겟
        






## Image 컴포넌트 테스트

### 사용법
```typescript


// config
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // breakPoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // breakPoints
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.namu.wiki",
      },
    ],
  },
};

export default nextConfig;



// width height를 지정해주면 next.config.js에서 설정한 사이즈의 분기 최대값을 가져온다 
// 예를 들어 config의 images: [10, 30, 70, 100, 150] 이었을 시 70사이즈를 가져옴. ( 요청은 &w=70 이런식으로 ) 
// 원본이 700px의 이미지여도 고유사이즈가 70px로 받아와짐
<div style={{ position: 'relative' }}>
    <Image src={'/aab.png'} alt={'hoho'} width={50} height={50} />
</div>


// fill 옵션을 줬을 때는 가장큰 이미지를 가져와서 디바이스 크기에 따라 렌더링함. 
// 예를 들어 600이었다면 config에서 600에서 가까운 최대값을 가져와서 200x200으로 렌더링함. 
// 실제 이미지가 200짜리라면 fill을 넣든 큰 이미지를 요청(width: 1080 등)하던 원본이미지는 200 
<div style={{ width: '200px', height: '200px', position: 'relative' }}>
    <Image src={'/error.png'} alt={'hoho'} fill loading='eager'/>
</div>


// 아래 같은 경우에는 렌더링되는 사이즈는 200x200이고 이미지가 1080사이즈여도 700x700으로 다운로드함 (고유사이즈 700x700)
<div style={{ width: '200px', height: '200px', position: 'relative' }}>
    <Image src={'/error.png'} alt={'hoho'} loading='eager' fill width={700} height={700}/>
</div>



// 위와 마찬가지로 요청시엔 가장 큰 사이즈를 가져와서 디바이스 사이즈에 맞게 렌더링 시킴 
<div style={{ width: '100%', height: '500px', position: 'relative' }}>
    <Image src={'/error.png'} alt={'hoho'} fill loading='eager'/>
</div>

/*
    fill을 사용할 경우 같은 이미지를 어떤 컴포넌트 내에서 렌더링하냐에 따라 적절한 sizes를 지정해야
    렌더링할 크기보다 한참 큰 이미지를 불러오는 일이 일어나지 않음
    물론 이미지를 크기에 맞게 변환하여 내려주는 것 자체가 리소스가 드는 일이기 때문에,
    breakPoints를 과도하게 설정해주는 것이 좋지는 않음.
    대체로 필요한 경우를 제외하고, 기본값을 사용하면 될 듯
    원본 이미지가 600px이라면, 1080사이즈, 1200사이즈로 요청하더라도 원본 이미지가 내려오게 됨
*/
```







