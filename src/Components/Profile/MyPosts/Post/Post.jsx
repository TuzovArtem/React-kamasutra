import react from 'react'
import classes from './Post.module.css'


const Post = () => {
  return(
  
    <div className={classes.post}>
     <img className={classes.avatar} src='https://via.placeholder.com/30' />  
     <div>post text </div>   
    </div>
        

    
  )
}

export default Post