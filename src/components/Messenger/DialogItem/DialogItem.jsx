import React from "react";
import s from './../Messenger.module.scss';
import { NavLink } from "react-router-dom";

const DialogItem =  (props) => {
   return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/Messenger/' + props.id}>{props.name}</NavLink>
   </div>
}

export default DialogItem;