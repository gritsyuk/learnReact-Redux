import React from "react";
import UsersItem from "./UsersItem";
import * as Axios from "axios";


const Users = (props) => {
    if (props.users.usersList == '') {
     Axios.get('https://social-network.samuraijs.com/api/1.0/users')
     .then(response => {props.setUsers(response.data.items)});  
         
         }
  let listUsersIem = props.users.usersList.map((el) => ( 
    <UsersItem key = {el.id} id={el.id} followed={el.followed} 
                name={el.name} img={el.photos} status={el.status} 
                location={el.location} followAction={props.followAction} 
                unfollowAction={props.unfollowAction} />
  ));
  return [listUsersIem];
};
export default Users;
