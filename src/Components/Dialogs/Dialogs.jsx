import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

  const  Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    
    return(
      <div className= {s.dialogs_item} >
          <NavLink to={path} activeClassName={s.active}> {props.name}  </NavLink>
       </div>
    );
  }

  const Message = (props) => {
      
    return(
      <div className={s.message}> {props.message} </div>
    );
  }

  const Dialogs = (props) => {
    return(
      <div className={s.dialogs}>
        <div className={s.dialogs_items }>

          <Dialog name='Dmitrich'  id='1'/>
          <Dialog name='Petr'  id='2'/>
          <Dialog name='Ivan'  id='3'/>
          <Dialog name='Lena'  id='4'/>
          <Dialog name='Ura'  id='5'/>

         
        </div>

        <div className={s.messages}>
         <Message message = '1-Lorem ipsum dolor sit amet.' />
         <Message message = '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi..' />
         <Message message = '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi.qfrawfawfawfwq' />
        </div>
      </div>
    );
  }

  export default Dialogs;