import { refreshTree } from "../../index";
const SET_VALUE_TEXTAREA = "SET-VALUE-TEXTAREA";
const ADD_POST = "ADD-POST";

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
      ],
      msgData: [
        { id: "1", message: "HI" },
        { id: "2", message: "HOw are you man" },
        { id: "3", message: "Hellow" },
      ],
    },
  },
  getState () {
      return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 3,
          message: action.msg,
          likeCount: 0,
        };
        this._state.posts.postData.push(newPost);
        this._state.posts.textareaValue = '';
        refreshTree();
        break;
      case SET_VALUE_TEXTAREA:
        this._state.posts.textareaValue = action.text;
        refreshTree();
        break;
      default:
        break;
    }
  },
};

export const setValueTextareaActionCreator = (text) => ({ type: SET_VALUE_TEXTAREA, text: text });
export const aadPostActionCreator = (text) => ({ type: ADD_POST, msg: text });

export default store;
