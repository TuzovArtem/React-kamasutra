
import s from './MyPost.module.css'
import Post from './Post/Post'


const MyPosts =  (props) => {

  let postData = [
    {id:1, message:'Hello World', likeCount:92},
    {id:2, message:'it\'s my first post',likeCount:14},

  ]

  return (
  <div className = {s.item}>
    My Post

    <div className = {s.big}>
      New Post
    </div>

    <div className={s.posts}>
      <Post  message={postData[0].message} likeCount={postData[0].likeCount}/>
      <Post  message={postData[1].message} likeCount={postData[1].likeCount}/>
      
      
    </div>
  </div>
  )
}

export default MyPosts;