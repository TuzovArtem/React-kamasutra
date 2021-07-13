import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ( props) => {
  
  let dialogsElement = props.dialogsData.map(   item => <DialogItem name={item.name} key={item.id} id={item.id} />);
  let messagesElement = props.messagesData.map( item => <Message text={item.message} key={item.id} id={item.id} /> );


  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;

    alert(text);

    newMessageElement.current.value = '';
   }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__item}>
        {dialogsElement}
      </div>
      <div className={classes.messages}>
        {messagesElement}  
      </div>
      <div className={classes.newMessages}>
        <textarea name="" id="" cols="10" rows="2"
        ref={newMessageElement} ></textarea>
        <button onClick={ addMessage } >Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
