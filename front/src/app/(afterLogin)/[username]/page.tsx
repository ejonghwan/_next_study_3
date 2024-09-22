
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
export default function Profile() {
  const user = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg'
  };

  return (
    <main>
      <div >
        <BackButton />
        <h3>{user.nickname}</h3>
      </div>
      <div >
        <div>
          <img src={user.image} alt={user.id}/>
        </div>
        <div>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button >팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}
