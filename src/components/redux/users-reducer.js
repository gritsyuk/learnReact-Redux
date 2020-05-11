const FOLLOW = "FOLLOW-USER";
const UNFOLLOW = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";


let initialState = {
  usersList : [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersList : state.usersList.map((el)=>{
          if (el.id === action.id) {return {...el, followed : true}}
          return el;
        })
      };
    case UNFOLLOW:
        return {
          ...state,
          usersList : state.usersList.map((el)=>{
            if (el.id === action.id) {return {...el, followed : false}}
            return el;
          })
        };  
        case SET_USERS:
          return {
            ...state,
            usersList : action.users
            // usersList : [...state.usersList, ...action.users]
          };    
    default:
      return state;
  }
}; 
export default usersReducer;

export const followAction = (id) => ({
  type: FOLLOW,
  id: id,
});
export const unfollowAction = (id) => ({
  type: UNFOLLOW,
  id: id,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users: users,
});