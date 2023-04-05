import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
function MyPosts(){
   return <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <MyPost message='Hi, damn illuspriiiite!' likesCount='14'/>
         <MyPost message="Helooooo! It's my first post" likesCount='23'/>
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