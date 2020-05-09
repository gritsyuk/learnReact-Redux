const SET_VALUE_TEXTAREA_POST = "SET-VALUE-TEXTAREA";
const ADD_POST = "ADD-POST";

let initialState = {
    postData: [
      { id: "1", message: "Коля", likeCount: 2 },
      { id: "2", message: "Собзегие 3", likeCount: 2 },
    ],
    textareaValue: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 3,
        message: action.msg,
        likeCount: 0,
      };
      return {
        ...state,
        postData : [...state.postData, newPost],
        textareaValue: '',
      };
    case SET_VALUE_TEXTAREA_POST:
      return {
        ...state,
        textareaValue: action.text,
      }; 
    default:
      return state;
  }
}; 
export default postReducer;

export const setValueTextareaActionCreator = (text) => ({
  type: SET_VALUE_TEXTAREA_POST,
  text: text,
});
export const aadPostActionCreator = (text) => ({ type: ADD_POST, msg: text });
