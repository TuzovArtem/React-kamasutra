import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
// import Profile from './Components/Profile/Profile';
// import Dialogs from './Components/Dialogs/Dialogs';
// import Music from './Components/Music/Music';
// import News from './Components/News/News';
// import Settings from './Components/Settings/Settings';
// import logo from './Simple_LOGO.png'
import { BrowserRouter, Route, Link } from "react-router-dom";

const   App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}




export default App;
