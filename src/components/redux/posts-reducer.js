const SET_VALUE_TEXTAREA_POST = "SET-VALUE-TEXTAREA";
const ADD_POST = "ADD-POST";

const postReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
          let newPost = {
            id: 3,
            message: action.msg,
            likeCount: 0,
          };
          state.postData.push(newPost);
          state.textareaValue = '';
          return state;
         case SET_VALUE_TEXTAREA_POST:
            state.textareaValue = action.text;
          return state;
        default:
        return state;
      }
    }
export default postReducer;   

export const setValueTextareaActionCreator = (text) => ({ type: SET_VALUE_TEXTAREA_POST, text: text });
export const aadPostActionCreator = (text) => ({ type: ADD_POST, msg: text });