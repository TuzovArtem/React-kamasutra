import classes from './Navbar.module.css'

const Navbar = () =>{
  return(
  <nav className={classes.nav}>
    <ul>
      <li> <a href='/profile'>Profile</a> </li>
      <li> <a href='/dialogs'>Message</a> </li>
      <li> <a>News</a> </li>
      <li> <a>Music</a> </li>
      <li> <a>Settings</a> </li>  
    </ul>
  </nav>)
}

export default Navbar