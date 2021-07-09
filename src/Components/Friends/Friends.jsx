import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) =>{


  let friendsElement=props.friendsInfo.map( elem => <Friend firstName={elem.firstName} secondName={elem.secondName} key={elem.id}/> )

  return(
    <div className={classes.friendsBlock}>

      <div className={classes.friendsBlock__title}>
        Friends
      </div>

      <div className={classes.friendsBlock__list}>
        {friendsElement}
      </div>

    </div>
  )  
}

export default Friends