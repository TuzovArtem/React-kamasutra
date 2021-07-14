

let rerenderEntireTree =  () =>{
  console.log("rerender tree")

}

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
    ],
    newMessageText:'New Text'
  },
  
  profilePage:{
    postData : [
      { text: "My First post", likes: 14225250, id: 1 },
      { text: "Second post is here", likes: 0, id: 2 },
      { text: "It is Third post", likes: 14210, id: 3 },
      { text: "Post number two plus two", likes: 110, id: 4 },],
      newPostText: 'it-kamasutra'
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


export let addPost = () =>{
  let newPost = {
    id:data.profilePage.postData.length+1,
    text:data.profilePage.newPostText,
    likes: Math.floor (Math.random()*1000)
  }
 
  data.profilePage.postData.push(newPost);
  data.profilePage.newPostText = '';
  rerenderEntireTree (data);
}

export let changeNewPostText = (newText) =>{
  data.profilePage.newPostText = newText;
  rerenderEntireTree (data)
}

export let changeNewMessageText = (newText) =>{
  data.messagesPage.newMessageText = newText;
  rerenderEntireTree (data);
}

export let addNewMessage = () => {
  let newMessage = {
    id:data.messagesPage.messagesData.length+1,
    message:data.messagesPage.newMessageText,
  }
  data.messagesPage.messagesData.push(newMessage);
  data.messagesPage.messagesData.newMessageText='';
  rerenderEntireTree (data);
}

export let subscribe = (observer) =>{
  rerenderEntireTree = observer;
}

window.data = data;

export default data;