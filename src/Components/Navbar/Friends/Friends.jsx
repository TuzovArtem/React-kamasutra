import  classes from './Friends.module.css';


const Friends = (props) => {

    let friendsInfo = props.friendsInfo.friendsInfo.friendsName.map( (elem) => ( 

      <div className={classes.friends_item}>
        <img src="https://via.placeholder.com/40x40" alt=""/>
        <div className={classes.item_name}> {elem.name}</div>
        <div className={classes.item_secondName}> {elem.secondName}</div> 
      </div>
      )
    );

  
  return  (<div className={classes.friends}>
            
          {friendsInfo}

      
      </div>)
}


    export default Friends;