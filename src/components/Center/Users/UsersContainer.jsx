import React from "react";
import {followAction, unfollowAction, setUsers} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from "./Users";

let mapStateToProps = (state) => {
      return {
        users : state.users
      }
}
let mapDispatchToProps = (dispatch) => {
return {
  followAction : (id)=> { dispatch( followAction(id) ) },
  unfollowAction : (id)=> { dispatch( unfollowAction(id) ) },
  setUsers: (users) => { dispatch (setUsers(users) ) },
}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users); 

export default UsersContainer;
