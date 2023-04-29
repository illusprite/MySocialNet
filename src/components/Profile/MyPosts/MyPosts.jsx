import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';


function MyPosts(props){
   debugger
   let postsElements = props.postsData
      .map( p => <MyPost message={p.message} key={p.id} likesCount={p.likesCount}/>);
   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.addPost();
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }
   return <div className={s.posts}>
         <div className={s.posts__title}>
            My posts
            <div>
               <textarea onChange={onPostChange} name="" ref={newPostElement} cols="50" rows="4" value={props.newPostText}/>
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div>
         </div>
         
         {postsElements}
   </div>
}

export default MyPosts;