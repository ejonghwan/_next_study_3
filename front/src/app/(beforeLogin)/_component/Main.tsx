import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <>
      <h2>BeforeLogin page</h2>
        <div>
          <Image
            // className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div>
          <h2>회원가입</h2>
          <Link href="/i/flow/signup">회원가입</Link>
          <Link href="/login">로그인</Link>
        </div>

        <div>
          <h2>인터셉팅</h2>
          <Link href="/itest">인터셉팅 테스트</Link>
          <Link href="/dkwlsWK">인터셉팅 테스트</Link>
        </div>
    </>
  )
}

export default MainPage