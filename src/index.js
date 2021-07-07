import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = {
  messagesData : [
    {message:"Hello", id:"1"},
    {message:"Hi,Are you ok?", id:"2"},
    {message:"Rnice", id:"3"},
    {message:"Allier", id:"4"}
  ],
  dialogsData : [
    { name: "Andrey", id: 1 },
    { name: "Dimych", id: 2 },
    { name: "Sveta", id: 3 },
    { name: "Sasha", id: 4 },
    { name: "Viktor", id: 5 },
  ],
  postData : [
    { text: "My First post", likes: 14225250, id: 1 },
    { text: "Second post is here", likes: 0, id: 2 },
    { text: "It is Third post", likes: 14210, id: 3 },
    { text: "Post number two plus two", likes: 110, id: 4 },
  ]
}
 
  

ReactDOM.render(<App data = { data } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
