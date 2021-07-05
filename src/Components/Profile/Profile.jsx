import react from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


const Profile = () => {
  return(
    <div>
        <img src='https://via.placeholder.com/1200x300' />
        <div>ava + discription </div>
        <MyPosts />

    </div>
  )
}

export default Profile