import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



  const Dialogs = (props) => {
    return(
      <div className={s.dialogs}>
        <div className={s.dialogs_items }>
          <div className= {s.dialogs_item + ' ' + s.active}>
           <NavLink to="/dialogs/1">Dmitrich </NavLink>
            </div>
          <div className={s.dialogs_item}>
          <NavLink to="/dialogs/2">Andrey </NavLink>
            </div>
          <div className={s.dialogs_item}>
          <NavLink to="/dialogs/3">Sasha </NavLink>
            </div>
          <div className={s.dialogs_item}>
          <NavLink to="/dialogs/4">Masha </NavLink>
            </div>
          <div className={s.dialogs_item}>
          <NavLink to="/dialogs/5">Ivan </NavLink>
            </div>
        </div>

        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}> How are you</div>
          <div className={s.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, odit!</div>
          <div className={s.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt minima aperiam repellat ab nihil fugiat blanditiis quae eligendi dolores?</div>
        </div>
      </div>
    );
  }

  export default Dialogs;