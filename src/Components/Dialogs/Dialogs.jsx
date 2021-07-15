import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ( props) => {
  
  let dialogsElement = props.dialogsData.map(   item => <DialogItem name={item.name} key={item.id} id={item.id} />);
  let messagesElement = props.messagesPage.messagesData.map( item => <Message text={item.message} key={item.id} id={item.id} /> );

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let action = {type:'ADD-NEW-MESSAGE'}
    props.dispatch(action)
   }
  let updateNewMessageText = () => {
    let text = newMessageElement.current.value;
    let action = { type:"CHANGE-NEW-MESSAGE-TEXT", newText: text};
    props.dispatch(action)
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
        ref={newMessageElement} value={props.messagesPage.newMessageText} onChange={updateNewMessageText} ></textarea>
        <button onClick={ addMessage } >Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
