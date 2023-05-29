const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   messengerData: [
      {id:1, name:'Max'},
      {id:2, name:'Pavel'},
      {id:3, name:'Alexandr'},
      {id:4, name:'Tatyana'},
      {id:5, name:'Diana'},
      {id:6, name:'Irina'},
      {id:7, name:'FlexPlace'},
   ],
   messengesData: [
      {id:1, message:'Hi'},
      {id:2, message:'Fffff'},
      {id:3, message:'Fow fooowww'},
      {id:4, message:'How are you?'},
      {id:5, message:'Purple season'},
      {id:6, message:'Irina'},
      {id:7, message:'FlexPlace'},
   ],
};

const messengerPageReducer = (state = initialState, action) => {
   switch(action.type){
      case UPDATE_NEW_MESSAGE_BODY:{
         return {
            ...state,
            newMessageBody: action.body
         };
      }
      case SEND_MESSAGE:{
         let body = action.newMessageBody;
         return {
            ...state,
            messengesData: [...state.messengesData, { id: 8, message: body}]
         };
      }
      default:{
         return state;
      }
   }
}
export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default messengerPageReducer;