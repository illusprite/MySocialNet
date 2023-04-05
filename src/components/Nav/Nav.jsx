import React from 'react';
import s from './Nav.module.css';
function Nav(){
   return <nav className={s.nav}>
      <div className={s.nav__wrapper}>
         <div className={s.item}>
            <a href="/profile">Profile</a>
         </div>
         <div className={s.item}>
            <a href="/News">News</a>
         </div>
         <div className={s.item}>
            <a href="/Messenger">Messenger</a>
         </div>
         <div className={s.item}>
            <a href="/Friends">Friends</a>
         </div>
         <div className={s.item}>
            <a href="/Music">Music</a>
         </div>
         <div className={s.item}>
            <a href="/Settings">Settings</a>
         </div>
      </div>
   </nav>
}

export default Nav;