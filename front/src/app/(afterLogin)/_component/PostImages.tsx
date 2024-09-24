import Link from "next/link";


type Props = {
  post: {
    postId: number;
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    Images: any[],
  }
}

export default function PostImages({post}: Props) {

  
console.log(post.Images.length)
  if (!post.Images) return null;
  if (!post.Images.length) return null;

  

  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'contain', width: '200px', height: '200px', display: "block"}}
      >
        <img src={post.Images[0]?.link} alt="" style={{  width: '200px', height: '200px', display: "block" }}/>
        
      </Link>
    )
  }
  
  if (post.Images.length === 2) {
    return (
      <div>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        
      </div>
    )
  }
  if (post.Images.length === 3) {
    return (
      <div>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <div>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
          </Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
          </Link>
        </div>
        
      </div>
    )
  }
  if (post.Images.length === 4) {
    return (
      <div>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{ backgroundImage: `url(${post.Images[3]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
      </div>
      
    )

  }
  if (post.Images.length === 5) {
    return (
      <div className="hoho">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{ backgroundImage: `url(${post.Images[3]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[4].imageId}`}
          style={{ backgroundImage: `url(${post.Images[4]?.link})`, backgroundSize: 'cover',  width: '200px', height: '200px', display: "block"}}>
        </Link>
      </div>
      
    )

  }
  return <div>이미지 없는거</div>
  return null;
}