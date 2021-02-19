import  s from './../Dialogs.module.css';

  const Message = (props) => {
      
    return(
      <div className={s.messageWrapper}>
        <div className={s.message}> {props.message} </div>
        <div className={s.likeCount}> {props.likeCount}&#10084; </div>
      </div>
    );
  }

  export default Message;