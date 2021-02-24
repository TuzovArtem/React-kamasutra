import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

import { BrowserRouter, Route, Link } from "react-router-dom";

const   App = (props) => {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
       <Route path='/dialogs' render = { ()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>
       <Route path='/profile' render = { ()=> <Profile postData={props.postData} /> }/> 
       <Route path='/music' render = { ()=> <Music/> }/>
       <Route path='/settings' render = { ()=> <Settings/> }/>
       <Route path='/news' render = { ()=> <News/> }/> 
      </div>
    </div>
  </BrowserRouter>

  );
}



export default App;
