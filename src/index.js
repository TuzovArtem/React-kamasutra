import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import data,{subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {addPost} from './redux/state';
import {changeNewPostText} from './redux/state';
import {changeNewMessageText} from './redux/state';
import {addNewMessage} from './redux/state';



let rerenderEntireTree = ()=> {
  ReactDOM.render(
  <BrowserRouter>
    <App data = { data } 
         addPost={addPost}
         changeNewPostText={changeNewPostText}
         changeNewMessageText={changeNewMessageText}
         addNewMessage={addNewMessage}/>
  </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree ();

subscribe(rerenderEntireTree);

serviceWorker.unregister();
