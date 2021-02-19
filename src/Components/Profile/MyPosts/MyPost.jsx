
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts =  (props) => {

  let postData = [
    {id:1, message:'Hello World', likeCount:92},
    {id:2, message:'it\'s my first post',likeCount:14},
    {id:3, message:'it\'s my second post',likeCount:14},
    {id:4, message:'Dada',likeCount:14},
  ];

  let posts = postData.map( p => <Post  message={p.message} likeCount={p.likeCount}/>);

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