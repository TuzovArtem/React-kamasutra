
import s from './MyPost.module.css'
import Post from './Post/Post'


const MyPosts =  () => {
  return (
  <div className = {s.item}>
    My Post

    <div className = {s.big}>
      New Post
    </div>

    <div>
      <Post />
      <Post />
      <Post />
      
    </div>
  </div>
  )
}

export default MyPosts;