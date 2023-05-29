import React from "react";
import s from './Messenger.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder='Enter your message'
               cols="50" rows="4" 
               component={"textarea"} name={"newMessageBody"} >
            </Field>
         </div>
         <div>
            <button>Send message</button>
         </div>
      </form>
   );
};
const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Messenger = (props) => {

   let state = props.messengerPage;

   let messengerElements = state.messengerData
      .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
   let messegesElements = state.messengesData
      .map(m => <Message message={m.message} key={m.id} />)
   let newMessageBody = state.newMessageBody;

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   };

   if (!props.isAuth) return <Navigate to={"/Login"} />;
   return <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {messengerElements}
      </div>
      <div className={s.messeges}>
         <div>{messegesElements}</div>
         <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
   </div>
}

export default Messenger;