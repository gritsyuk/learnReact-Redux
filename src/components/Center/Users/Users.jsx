import React from "react";
import UsersItem from "./UsersItem";
import * as Axios from "axios";

class Users extends React.Component {
  componentDidMount() {    
    if (this.props.users.usersList == '') {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {this.props.setUsers(response.data.items)});   
  }}
  render() {
    return (
      this.props.users.usersList.map( (el) => ( 
      <UsersItem key = {el.id} id={el.id} followed={el.followed} 
                  name={el.name} img={el.photos} status={el.status} 
                  location={el.location} followAction={this.props.followAction} 
                  unfollowAction={this.props.unfollowAction} />))
    )
  };
};
export default Users;
