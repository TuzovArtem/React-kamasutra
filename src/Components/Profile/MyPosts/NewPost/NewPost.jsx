import React from 'react'
import classes from './NewPost.module.css'


const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text);
    debugger;
  }
  
  
  return(
        <div className={classes.new_post}>

          <textarea name="" id="" cols="30" rows="3" ref = {newPostElement}></textarea>
          <button onClick = {  addPost }> Add post</button>
          <button>Add post</button>

           </div>
        

    
  )
}

export default NewPost