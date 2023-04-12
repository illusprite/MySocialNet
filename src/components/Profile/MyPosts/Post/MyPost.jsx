import React from 'react';
import s from './MyPost.module.css';
function MyPost(props){
   return <div className={s.item}>
            <img src="https://i.pinimg.com/736x/45/ef/d3/45efd3bcc430b83395f629a05a489ec5.jpg" alt="" />
               { props.message }
            <div>
               <span>like {props.likesCount}</span>
            </div>
         </div>
}
export default MyPost;