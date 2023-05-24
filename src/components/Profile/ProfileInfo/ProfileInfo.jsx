import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import Preloader from './../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/f330830a9bcecaa040636c4ab357277d.jpg';
function ProfileInfo(props) {
   if(!props.profile){
      return <Preloader/>
   }
   
   return <div className={s.content}>
      <div className={s.profile__fon}>
         <img src="https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg" alt="" />
      </div>
      <div className={s.profile__logo}>
         {props.profile.photos.large
         ? <img src={props.profile.photos.large} alt="" />
         : props.profile.userId = 29095
         ? <img src="https://i.pinimg.com/736x/45/ef/d3/45efd3bcc430b83395f629a05a489ec5.jpg" alt="" />
         : <img src={userPhoto} alt="" />
         }
      </div>
      <div className={s.profile__info}>
         <div className={s.name}>
            Cheshegorov Alexey
         </div>
         <ProfileStatus status={"Prrrrr"}/>
         <div className={s.city}>
            Ekaterinburg
         </div>
         <div className={s.age}>
            Nineteen
         </div>
      </div>
   </div>
}

export default ProfileInfo;