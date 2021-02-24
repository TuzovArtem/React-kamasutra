let state = {

  profilePage:{
    postData:[
      {id:1, message:'Hello World', likeCount:92},
      {id:2, message:'it\'s my first post',likeCount:14},
      {id:3, message:'it\'s my second post',likeCount:14},
      {id:4, message:'Dada',likeCount:14},
    ]
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
  }
}

export default state;