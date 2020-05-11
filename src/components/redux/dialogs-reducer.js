const SET_VALUE_TEXTAREA_CHAT = "SET-VALUE-TEXTAREA-CHAT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsData: [ 
      { id: "1", name: "Коля" },
      { id: "2", name: "Петя" },
      { id: "3", name: "Вася" },
      { id: "4", name: "Саша" },
      { id: "5", name: "Иван" },
      { id: "6", name: "Алиса" },
      { id: "6", name: "Алиса" },
      { id: "6", name: "Алиса" },
      { id: "6", name: "Алиса" },
    ],
    msgData: [
      { id: "1", message: "HI" },
      { id: "2", message: "HOw are you man" },
      { id: "3", message: "Hellow" },
      { id: "3", message: "Hellow" },
      { id: "3", message: "Hellow" },
      { id: "3", message: "Hellow" },
    ],
    textMsgCart: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMsg = {
        id: 4,
        message: action.msg,
      };
      return {
        ...state,
        msgData: [...state.msgData, newMsg],
        textMsgCart : "",
      };
    case SET_VALUE_TEXTAREA_CHAT:
      return {
        ...state,
        textMsgCart : action.text,
      };
    default:
      return state;
  } 
};
export default dialogsReducer;
export const setValueTextareaActionCreatorMsg = (text) => ({
  type: SET_VALUE_TEXTAREA_CHAT, 
  text: text,
});
export const aadMsgActionCreator = (text) => ({
  type: SEND_MESSAGE,
  msg: text,
});


