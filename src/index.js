import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './redux/state'
import { BrowserRouter, Route, Link } from "react-router-dom";
import {addPost} from './redux/state' 

addPost('hey!! hey')

ReactDOM.render(
  <BrowserRouter>
    <App data = { data } 
         addPost={addPost}/>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
