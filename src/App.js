import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
 import Settings from './Components/Settings/Settings';
 import logo from './Simple_LOGO.png'
import { BrowserRouter, Route, Link } from "react-router-dom";




const   App = (props) => {
   
 

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Route path='/dialogs'  render={ ()=> <Dialogs dialogsData={props.data.dialogsData}
                                                         messagesData={props.data.messagesData} />} />
          <Route path='/profile'  render={ ()=> <Profile postData={props.data.postData} />}  />
          <Route path='/news'     render={ ()=> <News />}  />
          <Route path='/settings' render={ ()=> <Settings />} />
          <Route path='/Music'    render={ () =>(<Music />) } />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
