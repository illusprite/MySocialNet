import { sendMessage} from "../../redux/messengerPage-reducer";
import Messenger from "./Messenger";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
let mapStateToProps = (state) => {
   return {
      messengerPage: state.messengerPageReducer
   }
}
export default compose(
   connect(mapStateToProps, { sendMessage }),
   withAuthRedirect
   )(Messenger); 