
import s from './MyPost.module.css'
import Post from './Post/Post'


const MyPosts =  (props) => {
  return (
  <div className = {s.item}>
    My Post

    <div className = {s.big}>
      New Post
    </div>

    <div className={s.posts}>
      <Post  message={props.message} likeCount='6'/>
      <Post  message='It`s my first post!' likeCount='139'/>
      
      
    </div>
  </div>
  )
}

export default MyPosts;