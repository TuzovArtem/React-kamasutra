import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo'




const Profile = () => {
  return (<div className={s.content}>
  <ProfileInfo />
  <MyPosts message='Message from my post'/>
</div>);
}

export default Profile;