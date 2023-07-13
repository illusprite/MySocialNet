import React from 'react';
import s from './Header.module.scss';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';

function Header(props) {
   return <header className={s.header}>
      <img src={logo}></img>
      <div className={s.login}>
         {props.isAuth
            ? <div className={s.loginAuthorized}>
               <p>{props.login} - </p>
               <button onClick={props.logout ? props.logout : () => { }}>Log out</button>
            </div>
            : <NavLink to={'/login'} style={{ textDecoration: 'none'}}>
               <div className={s.loginNotAuthorized}>Login</div>
            </NavLink>
         }
      </div>
   </header>
}

export default Header;



