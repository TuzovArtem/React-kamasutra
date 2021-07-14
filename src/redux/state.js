
let store ={
   data:{
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
  getStore(){
    return this.data
  },
  addPost(){
    let newPost = {
      id:this.data.profilePage.postData.length+1,
      text:this.data.profilePage.newPostText,
      likes: Math.floor (Math.random()*1000)
    }
    
    this.data.profilePage.postData.push(newPost);
    this.data.profilePage.newPostText = '';
    store.rerenderEntireTree (this.data);
  },
  changeNewPostText(newText){
    this.data.profilePage.newPostText = newText;
    store.rerenderEntireTree (this.data)
  },
  changeNewMessageText(newText){
    this.data.messagesPage.newMessageText = newText;
    store.rerenderEntireTree (this.data);
  },
  addNewMessage(){
    let newMessage = {
      id:this.data.messagesPage.messagesData.length+1,
      message:this.data.messagesPage.newMessageText,
    }
    this.data.messagesPage.messagesData.push(newMessage);
    this.data.messagesPage.messagesData.newMessageText='';
    store.rerenderEntireTree (this.data);
  },
  subscribe(observer){
    store.rerenderEntireTree = observer;
  },
  rerenderEntireTree(){
    console.log('Rerender')
  }
}









window.data = store.data;


export default store;