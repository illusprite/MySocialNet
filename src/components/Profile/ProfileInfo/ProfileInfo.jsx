import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/f330830a9bcecaa040636c4ab357277d.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0]);
      }
   }

   return <div className={s.content}>
      <div className={s.profile__fon}>
         <img src="https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg" alt="" />
      </div>
      <div className={s.profile__logo}>
         <img src={props.profile.photos.large || userPhoto} alt="" />
         {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      <div className={s.profile__info}>
         <div className={s.name}>
            Cheshegorov Alexey
         </div>
         <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
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