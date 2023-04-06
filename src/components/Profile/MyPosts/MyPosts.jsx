import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
function MyPosts(){

   let postsData = [
      {id:1, message:'Hi!', likesCount:'14'},
      {id:2, message:"Helooooo! It's my first post", likesCount:'23'},
      {id:3, message:'FowFowFow', likesCount:'13'},
      {id:4, message:'How are you?', likesCount:'233'},
      {id:5, message:'Purple season', likesCount:'27'},
      {id:6, message:'bless', likesCount:'22'},
      {id:7, message:'SadBoy99', likesCount:'90'},
   ]

   return <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <MyPost message={postsData[0].message} likesCount={postsData[0].likesCount}/>
         <MyPost message={postsData[1].message} likesCount={postsData[1].likesCount}/>
         <MyPost message={postsData[2].message} likesCount={postsData[2].likesCount}/>
         <MyPost message={postsData[3].message} likesCount={postsData[3].likesCount}/>
         <MyPost message={postsData[4].message} likesCount={postsData[4].likesCount}/>
         <MyPost message={postsData[5].message} likesCount={postsData[5].likesCount}/>
         <MyPost message={postsData[6].message} likesCount={postsData[6].likesCount}/>
   </div>
}

export default MyPosts;