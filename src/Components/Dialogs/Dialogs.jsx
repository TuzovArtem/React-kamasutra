import  s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

  const Dialogs = (props) => {
    

let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name}  id={dialog.id}/>);
let messageElements = props.messagesData.map( messageEl => <Message message ={messageEl.message} likeCount={messageEl.likeCount} /> )


    return(
      <div className={s.dialogs}>
        <div className={s.dialogs_items }>
          {dialogsElements}        
        </div>
        <div className={s.messages}>
          {messageElements}       
        </div>
      </div>
    );
  }

  export default Dialogs;