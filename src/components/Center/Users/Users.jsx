import React from "react";
import UsersItem from "./UsersItem";
import style from "./UsersItem.module.css";
import * as Axios from "axios";

class Users extends React.Component {
  componentDidMount() {    
    if (this.props.usersList == '') {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${this.props.currentPage}`)
    .then(response => {this.props.setUsers(response.data.items);
                       this.props.setTotalCountUsers(response.data.totalCount);
    });   
  }}
  setPage(page) {
    this.props.setCurrentPage(page);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${page}`)
    .then(response => {this.props.setUsers(response.data.items);
    });  
  }
  // pagination()  {
  //   for (let i = 1; i <= this.props.totalPage; i++) {
  //   {return (i)}
  //   }
  render() {
    let page = [];
    let totalPage = Math.ceil(this.props.totalCountUsers / this.props.countOnPage)
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    return (
      <div>
      <div className={style.pagination}>
       {page.map( (n) => <span onClick = {()=>this.setPage(n)} className = {(n === this.props.currentPage) && style.active}>{n}</span>)}
      </div>
      {
      this.props.usersList.map( (el) => (  
      <UsersItem key = {el.id} id={el.id} followed={el.followed} 
                  name={el.name} img={el.photos} status={el.status} 
                  location={el.location} followAction={this.props.followAction} 
                  unfollowAction={this.props.unfollowAction} />
                )
              )
        }
        </div>
      )
  };
};

export default Users;
