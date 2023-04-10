import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
function MyPosts(props){
   let postsElements = props.postsData
      .map( p => <MyPost message={p.message} likesCount={p.likesCount}/>)
   return <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         {postsElements}
   </div>
}

export default MyPosts;