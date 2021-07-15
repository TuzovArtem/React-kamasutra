
let store ={
   _data:{
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
  },
  _callSubscriber(){
    console.log('Rerender')
  },

  subscribe(observer){
    store._callSubscriber = observer;
  },
  getState(){
    return this._data
  },

  dispatch(action){
    if(action.type === "ADD-POST"){
      let newPost = {
        id:this._data.profilePage.postData.length+1,
        text:this._data.profilePage.newPostText,
        likes: Math.floor (Math.random()*1000)
      }
      
      this._data.profilePage.postData.push(newPost);
      this._data.profilePage.newPostText = '';
      store._callSubscriber (this._data);
    }else if ( action.type === "CHANGE-NEW-POST-TEXT"){
      this._data.profilePage.newPostText = action.newText;
      store._callSubscriber (this._data) 
    }else if ( action.type === "CHANGE-NEW-MESSAGE-TEXT"){
      this._data.messagesPage.newMessageText = action.newText;
      store._callSubscriber (this._data);
    }else if ( action.type === "ADD-NEW-MESSAGE"){
      let newMessage = {
        id:this._data.messagesPage.messagesData.length+1,
        message:this._data.messagesPage.newMessageText,
      }
      this._data.messagesPage.messagesData.push(newMessage);
      this._data.messagesPage.newMessageText='';
      store._callSubscriber (this._data);
    }
  } 
  // addPost(){
  //   let newPost = {
  //     id:this._data.profilePage.postData.length+1,
  //     text:this._data.profilePage.newPostText,
  //     likes: Math.floor (Math.random()*1000)
  //   }
    
  //   this._data.profilePage.postData.push(newPost);
  //   this._data.profilePage.newPostText = '';
  //   store._callSubscriber (this._data);
  // },
  // changeNewPostText(newText){
  //   this._data.profilePage.newPostText = newText;
  //   store._callSubscriber (this._data)
  // },
  // changeNewMessageText(newText){
  //   this._data.messagesPage.newMessageText = newText;
  //   store._callSubscriber (this._data);
  // },
  // addNewMessage(){
  //   let newMessage = {
  //     id:this._data.messagesPage.messagesData.length+1,
  //     message:this._data.messagesPage.newMessageText,
  //   }
  //   this._data.messagesPage.messagesData.push(newMessage);
  //   this._data.messagesPage.messagesData.newMessageText='';
  //   store._callSubscriber (this._data);
  // }
  
}









window.data = store._data;


export default store;