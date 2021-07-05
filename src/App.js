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
          <Route path='/dialogs'  component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/Music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
