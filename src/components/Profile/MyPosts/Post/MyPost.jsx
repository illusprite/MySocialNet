import React from 'react';
//import ava from '../../../../assets/images/Ava.jpg'
import s from './MyPost.module.scss';
function MyPost(props){
   return <div className={s.item}>
            <img src={props.ava} alt="" />
               { props.message }
            <div>
               <span>like {props.likesCount}</span>
            </div>
         </div>
}
export default MyPost;