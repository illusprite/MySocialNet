import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props){
   debugger
   let state = props.store.getState();

   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }
   debugger
   return <MyPosts updateNewPostText={onPostChange} 
      addPost={addPost} 
      postsData={state.profilePageReducer.postsData}
      newPostText={state.profilePageReducer.newPostText}/>
   
}

export default MyPostsContainer;