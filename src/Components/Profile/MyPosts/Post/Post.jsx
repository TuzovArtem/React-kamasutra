import react from 'react'
import classes from './Post.module.css'


const Post = (props) => {

  
  return(
  
    <div className={classes.post}>
     <img className={classes.avatar} src='https://via.placeholder.com/30' />  
     <div> {props.message} </div>   
     <div className={classes.like}> {props.like} liks </div>
    </div>
        

    
  )
}

export default Post