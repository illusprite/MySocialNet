import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messengerPage-reducer";
import Messenger from "./Messenger";

const MessengerContainer = (props) => {

   let state = props.store.getState();

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   };
   
   return <Messenger messengerPage={state.messengerPageReducer} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
}
export default MessengerContainer;