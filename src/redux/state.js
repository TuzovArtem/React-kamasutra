import {rerenderEntireTree} from '../render'

let state = {

  profilePage:{
    postData:[
      {id:1, message:'Hello World', likeCount:92},
      {id:2, message:'it\'s my first post',likeCount:14},
      {id:3, message:'it\'s my second post',likeCount:14},
      {id:4, message:'Dada',likeCount:14},
    ],
    newPostText:'it-kama'

  },
  dialogsPage:{
    dialogsData: [ 
    {id:1, name:'Dmitrich'},
      {id:2, name:'Petr'},
      {id:3, name:'Ivan'},
      {id:4, name:'Sasha'},
      {id:5, name:'Lena'},
    ],
    messagesData:[
      {id:1, message:'Hi', likeCount:12},
      {id:2, message:'Hellow, how are you?',likeCount:1234},
      {id:3, message:'Hellow world!',likeCount:234},
    ]
  },
    friends:{
      friendsName:[ 
          {id:1, name:'Misha', secondName:'Ivanov'},
          {id:2, name:'Evgeniy',secondName:'Petrov'},
          {id:3, name:'Artem',secondName:'Sidorov'},
          {id:4, name:'Oleg',secondName:'Zausaev'},
          {id:5, name:'Anatoliy',secondName:'Mironov'},
        ]
    }
}

export let addPost = () => {

  let message = {
    id:5,
    message:state.profilePage.newPostText,
    likeCount:0
  } 

  state.profilePage.postData.push(message)

  rerenderEntireTree(state);
  state.profilePage.newPostText = 'it-kama'
}

export let updateNewPostText =(newText) =>{

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;