import { rerenderEntireTree } from "../render";

let state ={
   profilePage:{
      postsData: [
         {id:1, message:'Hi!', likesCount:14},
         {id:2, message:"Helooooo! It's my first post", likesCount:23},
         {id:3, message:'FowFowFow', likesCount:13},
         {id:4, message:'How are you?', likesCount:233},
         {id:5, message:'Purple season', likesCount:27},
         {id:6, message:'bless', likesCount:22},
         {id:7, message:'SadBoy99', likesCount:90},
      ]
   },
   messengerPage:{
      messengerData: [
         {id:1, name:'Max'},
         {id:2, name:'Pavel'},
         {id:3, name:'Alexandr'},
         {id:4, name:'Tatyana'},
         {id:5, name:'Diana'},
         {id:6, name:'Irina'},
         {id:7, name:'FlexPlace'},
      ],
      messengesData: [
         {id:1, message:'Hi'},
         {id:2, message:'Fffff'},
         {id:3, message:'Fow fooowww'},
         {id:4, message:'How are you?'},
         {id:5, message:'Purple season'},
         {id:6, message:'Irina'},
         {id:7, message:'FlexPlace'},
      ]
   }
   
}
export let addPost = (postMessage) => {
   let newPost = {
      id: 8,
      message: postMessage,
      likesCount: 0
   }
   state.profilePage.postsData.push(newPost);
   rerenderEntireTree(state);
}
export default state;