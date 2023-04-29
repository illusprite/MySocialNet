import React from "react";
import s from './Messenger.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messenger = (props) => {

   let state = props.messengerPage;

   let messengerElements = state.messengerData
      .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
   let messegesElements = state.messengesData
      .map( m => <Message message={m.message} key={m.id}/>)
   let newMessageBody = state.newMessageBody;


   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }

   let onSendMessageClick = () => {
      props.sendMessage();
   };
   

   return <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {messengerElements}
      </div>
      <div className={s.messeges}>
         <div>{messegesElements}</div>
         <div>
            <textarea onChange={onNewMessageChange}
            value={newMessageBody} 
            placeholder='Enter your message' 
            name="" cols="50" rows="4"></textarea>
         </div>
         <div>
            <button onClick={onSendMessageClick}>Send message</button>
         </div>
      </div>
   </div>
}
export default Messenger;