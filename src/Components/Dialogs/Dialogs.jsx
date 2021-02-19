import  s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

  const Dialogs = (props) => {
    
let dialogsData = [ 
  {id:1, name:'Dmitrich'},
  {id:2, name:'Petr'},
  {id:3, name:'Ivan'},
  {id:4, name:'Sasha'},
  {id:5, name:'Lena'},
]
let messagesData = [
  {id:1, message:'Hi', likeCount:12},
  {id:2, message:'Hellow, how are you?',likeCount:1234},
  {id:3, message:'Hellow world!',likeCount:234},
]
let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name}  id={dialog.id}/>);
let messageElements = messagesData.map( messageEl => <Message message ={messageEl.message} likeCount={messageEl.likeCount} /> )


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