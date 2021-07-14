import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";




let rerenderEntireTree = ()=> {
  ReactDOM.render(
  <BrowserRouter>
    <App data = { store.data } 
         addPost={store.addPost.bind(store)}
         changeNewPostText={store.changeNewPostText.bind(store)}
         changeNewMessageText={store.changeNewMessageText.bind(store)}
         addNewMessage={store.addNewMessage.bind(store)}/>
  </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree ();

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
