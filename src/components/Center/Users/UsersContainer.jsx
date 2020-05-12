import React from "react";
import {followAction, unfollowAction, setUsers, setCurrentPage, setTotalCountUsers} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from "./Users";

let mapStateToProps = (state) => {
      return {
        usersList : state.users.usersList,
        totalPage: state.users.totalPage,
        currentPage: state.users.currentPage,
        countOnPage: state.users.countOnPage,
        totalCountUsers: state.users.totalCountUsers,
      }
}
let mapDispatchToProps = (dispatch) => {
return {
  followAction : (id)=> { dispatch( followAction(id) ) },
  unfollowAction : (id)=> { dispatch( unfollowAction(id) ) },
  setUsers: (users) => { dispatch (setUsers(users) ) },
  setCurrentPage: (n) => { dispatch (setCurrentPage(n) ) },
  setTotalCountUsers: (n) => { dispatch (setTotalCountUsers(n) ) },
}

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users); 

export default UsersContainer;
