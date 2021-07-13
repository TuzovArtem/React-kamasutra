import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {addPost} from './redux/state';
import {changeNewPostText} from './redux/state';
import {changeNewMessageText} from './redux/state';
import {addNewMessage} from './redux/state';



export let rerenderEntireTree = (data)=> {
  ReactDOM.render(
  <BrowserRouter>
    <App data = { data } 
         addPost={addPost}
         changeNewPostText={changeNewPostText}
         changeNewMessageText={changeNewMessageText}
         addNewMessage={addNewMessage}/>
  </BrowserRouter>, document.getElementById('root'));
}

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
