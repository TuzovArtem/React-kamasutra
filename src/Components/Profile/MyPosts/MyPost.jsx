
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts =  (props) => {

  

  let posts = props.postData.map( p => <Post  message={p.message} likeCount={p.likeCount}/>);

  return (
  <div className = {s.item}>
    My Post

    <div className = {s.big}>
      New Post
    </div>

    <div className={s.posts}>    
      {posts}
    </div>
  </div>
  )
}

export default MyPosts;