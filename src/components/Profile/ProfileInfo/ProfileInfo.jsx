import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/f330830a9bcecaa040636c4ab357277d.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

   let [editMode, setEditMode] = useState(false);

   if (!props.profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (formData) => {
      props.saveProfile(formData).then(
         () => {
            setEditMode(false);
         }
      );
   }
   debugger
   return <div className={s.content}>
      <div className={s.profile__fon}>
         <img src="https://vk-oblozhki.ru/photos/big/shestiugol-niki-rendering-svet-forma-339-3732.jpg" alt="" />
      </div>
      <div className={s.profile__logo}>
         <img src={props.profile.photos.large || userPhoto} alt="" />
         {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      {editMode
         ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile} />
         : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

   </div>
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return <div className={s.profile__info}>

      {/* <div className={s.city}>
      Ekaterinburg
   </div>
   <div className={s.age}>
      Nineteen
   </div> */}
      <div className={s.name}>
         {profile.fullName}
      </div>
      <div>
         {isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
      <div>
         <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
         <div>
            <b>My proff skillz</b>:{profile.lookingForAJobDescription}
         </div>
      }
      <div>
         <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
         <b>Contacts</b>:{Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
      </div>
   </div>
}
export const Contact = ({ contactTitle, contactValue }) => {
   return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;