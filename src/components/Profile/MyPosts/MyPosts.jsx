import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
function MyPosts(){
   return <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
         <MyPost/>
   </div>
}

export default MyPosts;