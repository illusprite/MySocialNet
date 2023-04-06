import React from 'react';
import s from './ProfileInfo.module.css';
function ProfileInfo() {
   return <div className={s.content}>
      <div className={s.profile__fon}>
         <img src="https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg" alt="" />
      </div>
      <div className={s.profile__logo}>
         <img src="https://i.pinimg.com/736x/45/ef/d3/45efd3bcc430b83395f629a05a489ec5.jpg" alt="" />
      </div>
      <div className={s.profile__info}>
         <div className={s.name}>
            Cheshegorov Alexey
         </div>
         <div className={s.status}>
            Prrrr Wake Up!
         </div>
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