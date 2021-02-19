import  s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

  const  DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    
    return(
      <div className= {s.dialogs_item} >
          <NavLink to={path} activeClassName={s.active}> {props.name}  </NavLink>
       </div>
    );
  }
  
  export default DialogItem;