import React from 'react'
import classes from './NewPost.module.css'


const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = ()=>{
    let action = {type:"ADD-POST" }
    props.dispatch(action);
  }

  let changeNewPostText = () =>{
    let newText = newPostElement.current.value
    let action = { type:"CHANGE-NEW-POST-TEXT",newText:newText}
    props.dispatch(action)

  }
  
  
  return(
        <div className={classes.new_post}>

          <textarea name="" id="" cols="30" rows="3" ref = {newPostElement}  value = {props.newPostText} onChange = { changeNewPostText} />
          <button onClick = {addPost}> Add post</button>
          <button>Add post</button>

           </div>
        

    
  )
}

export default NewPost