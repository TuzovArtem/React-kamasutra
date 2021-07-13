import {rerenderEntireTree} from "./../render"

let data = {
  messagesPage:  {
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
    ]
  },
  
  profilePage:{
    postData : [
      { text: "My First post", likes: 14225250, id: 1 },
      { text: "Second post is here", likes: 0, id: 2 },
      { text: "It is Third post", likes: 14210, id: 3 },
      { text: "Post number two plus two", likes: 110, id: 4 },
    ]
  }, 

  friendsBlock:{
    friendsInfo:[
      { id:1, firstName:'Ivan', secondName:'Revizov'},
      { id:2, firstName:'Mariya', secondName:'Nizova'},
      { id:3, firstName:'Sveta', secondName:'Orlova'},
      { id:4, firstName:'Elena', secondName:'Proscunova'},
      { id:5, firstName:'Sergey', secondName:'Lazarev'}
    ]    
  }
}


export let addPost = (postMessage) =>{
  let newPost = {
    id:5,
    text:postMessage,
    likes:0
  }
 
 data.profilePage.postData.push(newPost);
 rerenderEntireTree (data);
}

export default data;