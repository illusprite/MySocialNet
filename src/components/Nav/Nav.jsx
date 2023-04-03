import React from 'react';
import s from './Nav.module.css';
function Nav(){
   return <nav className={s.nav}>
      <div className={s.nav__wrapper}>
         <div className={s.item}>
            <a href="#">Profile</a>
         </div>
         <div className={s.item}>
            <a href="#">News</a>
         </div>
         <div className={s.item}>
            <a href="#">Messenger</a>
         </div>
         <div className={s.item}>
            <a href="#">Friends</a>
         </div>
         <div className={s.item}>
            <a href="#">Music</a>
         </div>
         <div className={s.item}>
            <a href="#">Settings</a>
         </div>
      </div>
   </nav>
}

export default Nav;