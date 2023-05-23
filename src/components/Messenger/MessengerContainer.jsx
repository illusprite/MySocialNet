import { sendMessage, updateNewMessageBody } from "../../redux/messengerPage-reducer";
import Messenger from "./Messenger";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

/*const MessengerContainer = (props) => {

   let state = props.store.getState();

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBody(body));
   }

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessage());
   };
   
   return <Messenger messengerPage={state.messengerPageReducer} 
                     updateNewMessageBody={onNewMessageChange} 
                     sendMessage={onSendMessageClick}/>
}*/
let AuthRedirectComponent = withAuthRedirect(Messenger);

let mapStateToProps = (state) => {
   return {
      messengerPage: state.messengerPageReducer
   }
}
const MessengerContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);

export default MessengerContainer;