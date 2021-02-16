import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPost';




const Profile = () => {
  return (<div className={s.content}>
  <div>
    <img  src='https://via.placeholder.com/800x70'/>
  </div>

  <div>
    AVA+DISCRIP
  </div>
<MyPosts />
</div>);
}

export default Profile;