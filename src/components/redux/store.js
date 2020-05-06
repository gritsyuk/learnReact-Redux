import postReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer"; 

let store = {
  _state: {
    posts: {
      postData: [
        { id: "1", message: "Коля", likeCount: 2 },
        { id: "2", message: "Собзегие 3", likeCount: 2 },
      ],
      textareaValue: "",
    },
    dialogs: {
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
    },
  },
  _callSubscribe(obj) {
    return obj;
    // console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.posts = postReducer(this._state.posts, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._callSubscribe(this._state);
  },
};
export default store;
