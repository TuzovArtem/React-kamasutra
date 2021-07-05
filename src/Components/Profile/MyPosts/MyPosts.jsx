import react from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'

const MyPosts = () => {
  return(
    
  <div className={classes.my_posts}>My post 
    <NewPost />
    <Post message='Hi, how are you?' like='140' />
    <Post message='Am fine, you?' like= '14' />
  </div>
  )
}

export default MyPosts