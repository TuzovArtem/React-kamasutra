import react from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'

const MyPosts = () => {
  return(
    
  <div className={classes.my_posts}>My post 
    <NewPost />
    <Post />
    <Post />
  </div>
  )
}

export default MyPosts