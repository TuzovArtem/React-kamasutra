
import s from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts =  (props) => {

  let posts = props.postData.postData.map( p => <Post  message={p.message} likeCount={p.likeCount}/>);
  let newPostElement = React.createRef();

  function addPost(){
    let text = newPostElement.current.value;
    
    props.addPost(text);

    newPostElement.current.value = '';
  }

  let  onPostChange =()=>{
    let text = newPostElement.current.value;

    props.updateNewPostText(text);

  };

  

  return (
  <div className = {s.item}>
    <h3>My Posts</h3>
    <div>
      <div className={s.textarea}>
        <textarea onChange={onPostChange} cols="10" rows="5" ref={newPostElement} 
                  value={props.postData.newPostText}/>
      </div>
      
      <div className={s.button}>
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