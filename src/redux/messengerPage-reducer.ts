const UPDATE_NEW_MESSAGE_BODY = 'messengerPage-reducer/UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'messengerPage-reducer/SEND_MESSAGE';

type DialogType = {
   id: number
   name: string
}
type MessageType = {
   id: number
   message: string
}

let initialState = {
   messengerData: [
      {id:1, name:'Max'},
      {id:2, name:'Pavel'},
      {id:3, name:'Alexandr'},
      {id:4, name:'Tatyana'},
      {id:5, name:'Diana'},
      {id:6, name:'Irina'},
      {id:7, name:'FlexPlace'},
   ] as Array<DialogType>,
   messengesData: [
      {id:1, message:'Hi'},
      {id:2, message:'Fffff'},
      {id:3, message:'Fow fooowww'},
      {id:4, message:'How are you?'},
      {id:5, message:'Purple season'},
      {id:6, message:'Irina'},
      {id:7, message:'FlexPlace'},
   ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const messengerPageReducer = (state = initialState, action: any): InitialStateType => {
   switch(action.type){
      case SEND_MESSAGE:{
         let body = action.newMessageBody;
         return {
            ...state,
            messengesData: [...state.messengesData, { id: 8, message: body}]
         };
      }
      /* case UPDATE_NEW_MESSAGE_BODY:{
         return {
            ...state,
            newMessageBody: action: any.body
         };
      } */
      default:{
         return state;
      }
   }
}

type SendMessageActionType = {
   type: typeof SEND_MESSAGE
   newMessageBody: string
}

export const sendMessage = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})

export default messengerPageReducer