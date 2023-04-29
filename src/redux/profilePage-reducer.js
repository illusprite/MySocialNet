const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
   postsData: [
      {id:1, message:'Hi!', likesCount:14},
      {id:2, message:"Helooooo! It's my first post", likesCount:23},
      {id:3, message:'FowFowFow', likesCount:13},
      {id:4, message:'How are you?', likesCount:233},
      {id:5, message:'Purple season', likesCount:27},
      {id:6, message:'bless', likesCount:22},
      {id:7, message:'SadBoy99', likesCount:90},
   ],
   newPostText: 'aaaaaaaaa',
};

const profilePageReducer = (state = initialState, action) => {
   switch(action.type){
      case ADD_POST:{
         let newPost = {
            id: 8,
            message: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         };
      }
      case UPDATE_NEW_POST_TEXT:{
         return  {
            ...state,
            newPostText: action.newText
         };
      }
      default:{
         return state;
      }
   }
};
export const addPostActionCreator = () => ({type: ADD_POST})//return не нужен, он вместо ()
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profilePageReducer;