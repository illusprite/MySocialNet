import React from "react";
import s from './Messenger.module.css';
import { NavLink } from "react-router-dom";

const DialogItem =  (props) => {
   return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/Messenger/' + props.id}>{props.name}</NavLink>
   </div>
}
const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}
const Messenger = (props) => {

   let messengerData = [
      {id:1, name:'Max'},
      {id:2, name:'Pavel'},
      {id:3, name:'Alexandr'},
      {id:4, name:'Tatyana'},
      {id:5, name:'Diana'},
      {id:6, name:'Irina'},
      {id:7, name:'FlexPlace'},
   ]

   let messengesData = [
      {id:1, message:'Hi'},
      {id:2, message:'Fffff'},
      {id:3, message:'Fow fooowww'},
      {id:4, message:'How are you?'},
      {id:5, message:'Purple season'},
      {id:6, message:'Irina'},
      {id:7, message:'FlexPlace'},
   ]

   return <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         <DialogItem name={messengerData[0].name} id={messengerData[0].id}/>
         <DialogItem name={messengerData[1].name} id={messengerData[1].id}/>
         <DialogItem name={messengerData[2].name} id={messengerData[2].id}/>
         <DialogItem name={messengerData[3].name} id={messengerData[3].id}/>
         <DialogItem name={messengerData[4].name} id={messengerData[4].id}/>
         <DialogItem name={messengerData[5].name} id={messengerData[5].id}/>
         <DialogItem name={messengerData[6].name} id={messengerData[6].id}/>
      </div>
      <div className={s.messeges}>
         <Message message={messengesData[0].message}/>
         <Message message={messengesData[1].message}/>
         <Message message={messengesData[2].message}/>
         <Message message={messengesData[3].message}/>
         <Message message={messengesData[4].message}/>
      </div>
   </div>
}
export default Messenger;