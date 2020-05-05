const SET_VALUE_TEXTAREA_CHAT = "SET-VALUE-TEXTAREA-CHAT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMsg = {
        id: 3,
        message: action.msg,
      };
      state.msgData.push(newMsg);
      state.textMsgCart = "";
      return state;
    case SET_VALUE_TEXTAREA_CHAT:
        state.textMsgCart = action.text;
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;

export const setValueTextareaActionCreatorMsg = (text) => ({ type: SET_VALUE_TEXTAREA_CHAT, text: text });
export const aadMsgActionCreator = (text) => ({ type: SEND_MESSAGE, msg: text });
