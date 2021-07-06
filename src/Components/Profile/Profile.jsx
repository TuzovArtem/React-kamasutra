import react from 'react'
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './Profile.module.css';



const Profile = () => {
  return(
    <div>
        <ProfileInfo />
        <MyPosts />

    </div>
  )
}

export default Profile