const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let store = {
   _state: {
      profilePage:{
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
      
   },
   _callSubscriber(){
      console.log('State changed');
   },

   getState(){
      return this._state;
   },
   subcribe(observer){
      this._callSubscriber = observer;
   },
   
   addPost(){
      let newPost = {
         id: 8,
         message: this._state.profilePage.newPostText,
         likesCount: 0
      }
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText){
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   dispatch(action){
      if (action.type === ADD_POST){
         let newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         }
         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   }
}
export const addPostActionCreator = () => ({type: ADD_POST})//return не нужен, он вместо ()
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;
window.store = store;