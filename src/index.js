import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id:1, message:'Hello World', likeCount:92},
  {id:2, message:'it\'s my first post',likeCount:14},
  {id:3, message:'it\'s my second post',likeCount:14},
  {id:4, message:'Dada',likeCount:14},
];
let dialogsData = [ 
  {id:1, name:'Dmitrich'},
  {id:2, name:'Petr'},
  {id:3, name:'Ivan'},
  {id:4, name:'Sasha'},
  {id:5, name:'Lena'},
]
let messagesData = [
  {id:1, message:'Hi', likeCount:12},
  {id:2, message:'Hellow, how are you?',likeCount:1234},
  {id:3, message:'Hellow world!',likeCount:234},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData} dialogsData={dialogsData} messagesData={messagesData}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
