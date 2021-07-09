import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {

 if (props.id % 2 === 1){
  return <div className={classes.messages}>{props.text}</div>;
 }else{ 
   return <div className={classes.messages + ' ' + classes.interlocutor}>{props.text}</div>;
 }
  
};

export default Message;
