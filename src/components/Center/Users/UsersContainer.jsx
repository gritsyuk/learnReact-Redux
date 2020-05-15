import React from "react";
import { connect } from 'react-redux';
import {followAction, unfollowAction, setUsers, setCurrentPage, setTotalCountUsers, isTogglePreload} from '../../redux/users-reducer';
import UsersItem from "./UsersItem";
import Preload from '../../Preloader/Preload';
import * as Axios from "axios";


class UsersContainer extends React.Component {
  componentDidMount() {    
    if (this.props.usersList == '') {
    this.props.isTogglePreload(true);  
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.isTogglePreload(false); 
      this.props.setUsers(response.data.items);
      this.props.setTotalCountUsers(response.data.totalCount);
    });  
    
  }}
  setPage = (page)=> {
    this.props.setCurrentPage(page);
    this.props.isTogglePreload(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${page}`)
    .then(response => {
      this.props.isTogglePreload(false);  
      this.props.setUsers(response.data.items);
    }); 
    
  }
 
  render() {
    let page = [];
    let totalPage = Math.ceil(this.props.totalCountUsers / this.props.countOnPage)
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    return (
      <>
      {(this.props.togglePreload) &&  <Preload/>}
      <UsersItem usersList = {this.props.usersList} followAction={this.props.followAction}
       unfollowAction={this.props.unfollowAction} currentPage={this.props.currentPage}
       setPage={this.setPage} page={page} />
      </>
      )
  };
};


let mapStateToProps = (state) => {
      return {
        usersList : state.users.usersList,
        totalPage: state.users.totalPage,
        currentPage: state.users.currentPage,
        countOnPage: state.users.countOnPage,
        totalCountUsers: state.users.totalCountUsers,
        togglePreload: state.users.togglePreload,
      }
}

export default connect(mapStateToProps,  
  {followAction, unfollowAction, setUsers, setCurrentPage, setTotalCountUsers, isTogglePreload })(UsersContainer); 


// let mapDispatchToProps = (dispatch) => {
// return {
//   followAction : (id)=> { dispatch( followAction(id) ) },
//   unfollowAction : (id)=> { dispatch( unfollowAction(id) ) },
//   setUsers: (users) => { dispatch (setUsers(users) ) },
//   setCurrentPage: (n) => { dispatch (setCurrentPage(n) ) },
//   setTotalCountUsers: (n) => { dispatch (setTotalCountUsers(n) ) },
//   isTogglePreload: (n) => { dispatch (isTogglePreload(n) ) },
// }
//}