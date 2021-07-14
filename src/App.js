import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Link } from "react-router-dom";

const   App = (props) => {

  return (  
      <div className="app-wrapper">
        <Header />
        <Navbar friendsInfo={props.data.friendsBlock.friendsInfo}/>
        <div className='content'>
          <Route path='/dialogs'  render={ ()=> <Dialogs dialogsData={props.data.messagesPage.dialogsData}
                                                         messagesData={props.data.messagesPage.messagesData} 
                                                         newMessageText={props.data.messagesPage.newMessageText}
                                                         addNewMessage={props.addNewMessage}
                                                         changeNewMessageText = {props.changeNewMessageText}/>} />
          <Route path='/profile'  render={ ()=> <Profile postData={props.data.profilePage.postData}
                                                         addPost={props.addPost} 
                                                         newPostText={props.data.profilePage.newPostText}
                                                         changeNewPostText={props.changeNewPostText}/>}  />
          <Route path='/news'     render={ ()=> <News />}  />
          <Route path='/settings' render={ ()=> <Settings />} />
          <Route path='/Music'    render={ () =>(<Music />) } />
        </div>
      </div>
      
  );
}

export default App;
