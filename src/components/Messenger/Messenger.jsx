import React from "react";
import s from './Messenger.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messenger = (props) => {

   let messengerElements = props.messengerData
      .map( d => <DialogItem name={d.name} id={d.id}/>);
   let messegesElements = props.messengesData
      .map( m => <Message message={m.message}/>)
   let newMessageElement = React.createRef();
   let addMessage = () => {
      alert(newMessageElement.current.value);
   };
   return <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {messengerElements}
      </div>
      <div className={s.messeges}>
         {messegesElements}
         <div>
            <textarea name="" ref={newMessageElement} cols="50" rows="4"></textarea>
         </div>
         <div>
            <button onClick={addMessage}>Add message</button>
         </div>
      </div>
   </div>
}
export default Messenger;