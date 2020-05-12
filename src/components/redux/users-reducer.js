const FOLLOW = "FOLLOW-USER";
const UNFOLLOW = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";

let initialState = {
  usersList: [],
  currentPage: 1,
  countOnPage: 50,
  totalCountUsers: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersList: state.usersList.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersList: state.usersList.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        usersList: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT_USERS:
      return {
        ...state,
        totalCountUsers: action.totalCountUsers,
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

export const setCurrentPage = (numPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: numPage,
});
export const setTotalCountUsers = (num) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCountUsers: num,
});
