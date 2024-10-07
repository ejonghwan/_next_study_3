import { auth } from "./auth"
// import { auth as middelware } from "./auth" 어스 함수 이름 바꾸면 이게 미들웨어가 됨
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

// See "Matching Paths" below to learn more 로그인 해야만 들어가는 페이지
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}