import React from 'react';
import s from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
function Nav(){
   return <nav className={s.nav}>
      <div className={s.nav__wrapper}>
         <div className={s.item}>
            <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Messenger" className = { navData => navData.isActive ? s.active : s.item }>Messenger</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Friends" className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
         </div>
      </div>
   </nav>
}

export default Nav;