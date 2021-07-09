import React from 'react';
import classes from './../Friends.module.css';

const Friend = (props) =>{

  return(
    <div className={classes.friend}>
      <img className={classes.friend__img} 
       src="https://via.placeholder.com/50" alt=""/>
      <div className={classes.friend__firstname}> {props.firstName} </div>
      <div className={classes.friend__secondname}> {props.secondName} </div>
  </div>
  )  
}

export default Friend