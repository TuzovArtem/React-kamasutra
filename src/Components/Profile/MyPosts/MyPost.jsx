
import s from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts =  (props) => {

  let posts = props.postData.map( p => <Post  message={p.message} likeCount={p.likeCount}/>);
  let newPostElement = React.createRef();

  function addPost(){
    let text = newPostElement.current.value;

    console.log(text)
  }

  return (
  <div className = {s.item}>
    <h3>My Posts</h3>
    <div>
      <div>
        <textarea name="" id="" cols="10" rows="5" ref={newPostElement}></textarea>
      </div>
      
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>

    </div>

    <div className={s.posts}>    
      {posts}
    </div>
  </div>
  )
}

export default MyPosts;