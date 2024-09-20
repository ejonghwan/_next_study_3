
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
// import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
// import {faker} from '@faker-js/faker';
// import PostImages from "@/app/(afterLogin)/_component/PostImages";
// import Image from 'next/image';

dayjs.locale('ko'); // 한글 플로그인
dayjs.extend(relativeTime) // 현재 시간기준 얼마나 지났는지. 플로그인 사용

type Props = {
  noImage?: boolean
}
export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [],
  }
  if (Math.random() > 0.5 && !noImage) {
    // target.Images.push({imageId: 1, link: '/'})
    // target.Images.push(
    //   {imageId: 1, link: faker.image.urlLoremFlickr()},
    //   {imageId: 2, link: faker.image.urlLoremFlickr()},
    //   {imageId: 3, link: faker.image.urlLoremFlickr()},
    //   {imageId: 4, link: faker.image.urlLoremFlickr()},
    // )
  }

  return (
    // <PostArticle post={target}>
      <div>
        <div>
          <Link href={`/${target.User.id}`}>
            {/* <Image src={target.User.image} alt={target.User.nickname} width={100} height={100}/> */}
        
          </Link>
        </div>
        <div>
          <div>
            <Link href={`/${target.User.id}`}>
              <span>{target.User.nickname}</span>
              &nbsp;
              <span>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            {/* <PostImages post={target} /> */}
          </div>
          <ActionButtons />
        </div>
      </div>
    // </PostArticle>
  )
}