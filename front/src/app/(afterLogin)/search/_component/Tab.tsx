"use client";

import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?${searchParams.toString()}&f=live`)
  }

  return (
    <div>
      <div>
        <div onClick={onClickHot}>
          인기
          <div  hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  );
}