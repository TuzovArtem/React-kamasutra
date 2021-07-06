import React from 'react'
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) =>{

  let path = `/dialogs/` + props.id
  return(
    <div className={classes.dialogs + ' ' + classes.active}>
         <NavLink to={path}>{props.name} </NavLink> 
         </div>
  )
}

const Message = (props)=>{

  return( 
    <div className={classes.message}> {props.text} </div>
  )
}


const Dialogs  = () =>{
  return( 
    <div className={classes.dialogs}>
      <div className={classes.dialogs__item}>

       <DialogItem name='Andrey' id='1' />
       <DialogItem name='Dimych' id='2' />
       <DialogItem name='Sveta' id='3' />
       <DialogItem name='Sasha' id='4' />
       <DialogItem name='Viktor' id='5' />
       <DialogItem name='Valera' id='6' />

       
      </div>
      <div className={classes.messages}>
        <Message text="Hello" />
        <Message text="Hi,Are you ok?" />
        <Message text="Rnice" />
       
      </div>
    </div>
  )
}

export default Dialogs