import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
function MyPosts(props){
   let postsElements = props.postsData
      .map( p => <MyPost message={p.message} likesCount={p.likesCount}/>);
   let newPostElement = React.createRef();
   let addPost = () => {
      debugger
      let text = newPostElement.current.value;
      props.addPost(text);
   };
   return <div className={s.posts}>
         <div className={s.posts__title}>
            My posts
            <div>
               <textarea name="" ref={newPostElement} cols="50" rows="4"></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         
         {postsElements}
   </div>
}

export default MyPosts;