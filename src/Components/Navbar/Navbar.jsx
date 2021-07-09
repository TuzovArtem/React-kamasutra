import Friends from './../Friends/Friends'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = (props) =>{
  return(

  <nav className={classes.nav}>
    <ul>
      <li> <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink> </li>
      <li> <NavLink to='/dialogs' activeClassName={classes.active}>Message</NavLink> </li>
      <li> <NavLink to='/news' activeClassName={classes.active}>News</NavLink> </li>
      <li> <NavLink to='/music' activeClassName={classes.active}>Music</NavLink> </li>
      <li> <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink> </li>  
    </ul>

    <Friends  friendsInfo={props.friendsInfo}/>
    
  </nav>)
}

export default Navbar