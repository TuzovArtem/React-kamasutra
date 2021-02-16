import s from './Profile.module.css'

console.log(s)

const Profile = () => {
  return (<div className={s.content}>
  <div>
    <img  src='https://via.placeholder.com/800x70'/>
  </div>

  <div>
    AVA+DISCRIP
  </div>

  <div>
    My Post

    <div>
      New Post
    </div>

    <div>
      <div className={s.item}>
        Post 1
      </div>

      <div className={`${s.item} ${s.big}`}>
        Post 2
      </div>
    </div>

  </div>

</div>);
}

export default Profile;