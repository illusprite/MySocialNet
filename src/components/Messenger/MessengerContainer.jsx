import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/messengerPage-reducer";
import Messenger from "./Messenger";
import { connect } from "react-redux";

/*const MessengerContainer = (props) => {

   let state = props.store.getState();

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   };
   
   return <Messenger messengerPage={state.messengerPageReducer} 
                     updateNewMessageBody={onNewMessageChange} 
                     sendMessage={onSendMessageClick}/>
}*/
let mapStateToProps = (state) => {
   return {
      messengerPage: state.messengerPageReducer
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: () => {
         dispatch(sendMessageCreator());
      }
   }
}
const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;