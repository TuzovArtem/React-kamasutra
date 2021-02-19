import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";




  const  Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    
    return(
      <div className= {s.dialogs_item} >
          <NavLink to={path} activeClassName={s.active}> {props.name}  </NavLink>
       </div>
    );
  }

  const Message = (props) => {
      
    return(
      <div className={s.messageWrapper}>
        <div className={s.message}> {props.message} </div>
        <div className={s.likeCount}> {props.likeCount}&#10084; </div>
      </div>
    );
  }


  
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
 
]
    return(
      <div className={s.dialogs}>
        <div className={s.dialogs_items }>

          <Dialog name={dialogsData[0].name}  id={dialogsData[0].id}/>
          <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
          <Dialog name='Ivan'  id='3'/>
          <Dialog name='Lena'  id='4'/>
          <Dialog name='Ura'  id='5'/>

         
        </div>

        <div className={s.messages}>
         <Message message ={messagesData[0].message} likeCount={messagesData[0].likeCount} />
         <Message message ={messagesData[1].message} likeCount={messagesData[1].likeCount}/>
         <Message message = '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi.qfrawfawfawfwq' />
        </div>
      </div>
    );
  }

  export default Dialogs;