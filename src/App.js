import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import logo from './Simple_LOGO.png'
import { BrowserRouter, Route, Link } from "react-router-dom";

const   App = (props) => {
  
  return (
    <div className="app-wrapper">
      <header className="header">
        <img  src = {logo} /> 
      </header>
      <nav className="nav">
        <ul>
          <li> <a>Profile</a> </li>
          <li> <a>Message</a> </li>
          <li> <a>News</a> </li>
          <li> <a>Music</a> </li>
          <li> <a>Settings</a> </li>
          
        </ul>
      </nav>
      <div className="content">
        Main content
      </div>
    </div>
  );
}




export default App;
