import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

import { BrowserRouter, Route, Link } from "react-router-dom";

const   App = () => {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
       <Route path='/dialogs' component={Dialogs}/>
       <Route path='/Profile' component={Profile}/> 
       <Route path='/Music' component={Music}/> 
       <Route path='/Settings' component={Settings}/> 
       <Route path='/News' component={News}/> 
      </div>
    </div>
  </BrowserRouter>

  );
}



export default App;
