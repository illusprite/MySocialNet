import React from "react";
import s from './../Messenger.module.css';

const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}

export default Message;