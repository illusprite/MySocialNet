import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


function MyPosts(props){

   let postsElements = props.postsData
      .map( p => <MyPost message={p.message} likesCount={p.likesCount}/>);
   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      props.dispatch(addPostActionCreator());
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   }
   return <div className={s.posts}>
         <div className={s.posts__title}>
            My posts
            <div>
               <textarea onChange={onPostChange} name="" ref={newPostElement} cols="50" rows="4" value={props.newPostText}/>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         
         {postsElements}
   </div>
}

export default MyPosts;