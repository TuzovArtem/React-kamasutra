import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo'




const Profile = (props) => {
  return (<div className={s.content}>
  <ProfileInfo />
  <MyPosts postData={props.postData} />
</div>);
}

export default Profile;