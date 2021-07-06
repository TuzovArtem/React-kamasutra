import React from 'react'
import classes from './Dialogs.module.css';

const Dialogs  = () =>{
  return( 
    <div className={classes.dialogs}>
      <div className={classes.dialogs__item}>
       <div className={classes.dialogs + ' ' + classes.active}>Andrey</div>
       <div className={classes.dialog}>Dimych</div>
       <div className={classes.dialog}>Sveta</div>
       <div className={classes.dialog}>Sasha</div>
       <div className={classes.dialog}>Viktor</div>
       <div className={classes.dialog}>Valera</div>
      </div>
      <div className={classes.messages}>
       <div className={classes.message}>HI</div>
       <div className={classes.message}>How Are you</div>
       <div className={classes.message}>NIce a you </div>
      </div>
    </div>
  )
}

export default Dialogs