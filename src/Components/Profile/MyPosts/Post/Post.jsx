
import s from './Post.module.css'


const Posts =  (props) => {
  return (
    <div className={s.item}>
      <img src='https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg' />
       {props.message}
       <div className={s.like}>
       <span > like = {props.likeCount} </span>
       </div>
    </div>

  )
}

export default Posts;