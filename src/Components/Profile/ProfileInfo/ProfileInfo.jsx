import s from './ProfileInfo.module.css';




const ProfileInfo = () => {
  return (
  <div className={s.content}>
    <div className={s.profile_inner}>
      <div className={s.avatar}>
        <div className={s.background}></div>
      </div>

      <div className = {s.discription}>
        <div className={s.name}>Ivan Petrov</div>
        <div className={s.birthDay}> Date of Birth: 2 january </div>
        <div className={s.city}>City:Minsk </div>
        <div className={s.Education}>Education: BSU'11 </div>
        <div className={s.WebSite}>Web Site: https://dsSamuraijs.com </div>
        
      </div>
    </div>
  </div>);
}

export default ProfileInfo;