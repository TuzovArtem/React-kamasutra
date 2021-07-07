import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/` + props.id;
  return (
    <div className={classes.dialogs + " " + classes.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}> {props.text} </div>;
};


const Dialogs = ( props) => {
  
  let dialogsData = [
    { name: "Andrey", id: 1 },
    { name: "Dimych", id: 2 },
    { name: "Sveta", id: 3 },
    { name: "Sasha", id: 4 },
    { name: "Viktor", id: 5 },
  ];

  let messagesData = [
    {message:"Hello", id:"1"},
    {message:"Hi,Are you ok?", id:"2"},
    {message:"Rnice", id:"3"}
  ]

  let dialogsElement = dialogsData.map(   item => <DialogItem name={item.name} key={item.id} />);
  let messagesElement = messagesData.map( item => <Message text={item.message} key={item.id} /> );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__item}>
        {dialogsElement}
      </div>
      <div className={classes.messages}>
        {messagesElement}  
      </div>
    </div>
  );
};

export default Dialogs;
