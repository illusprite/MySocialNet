import React from 'react';
import s from './Header.module.css';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';

function Header(props) {
   debugger
   return <header className={s.header}>
      <img src={logo}></img>
      <div className={s.loginBlock}>
         {props.isAuth ? props.login :
            <NavLink to={'/login'} >Login</NavLink>
         }
      </div>
   </header>
}

export default Header;