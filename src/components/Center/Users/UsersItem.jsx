import React from "react";
import css from "./UsersItem.module.css";
const NONE_LOGO= "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png";

export default class UsersItem extends React.Component {
  actionCreater(e, idUser) {
    (e.target.textContent === "unfollow")
      ? this.props.unfollowAction(idUser)
      : this.props.followAction(idUser);
  };
  render() {
    return (
      <div>
      <div className={css.pagination}>
      {this.props.page.map( (n) => <span onClick = {()=>this.props.setPage(n)} className = {(n === this.props.currentPage) && css.active}>{n}</span>)}
     </div>
     <div>
      {this.props.usersList.map( (el) => {
        return (
      <section className={css.usersPage} key={el.id}>
        <div className={css.firsCol}>
          <div>
            <img src={(!el.photos.small) ? NONE_LOGO : el.photos.small} />
          </div>
          <div>
            <button onClick={(e)=>{this.actionCreater(e, el.id)}}>
              {el.followed === true ? "unfollow" : "follow"}
            </button>
          </div>
        </div>
        <div className={css.secondCol}>
          <div>
            <b>{el.name}</b>
          </div>
          <div>
            <small>{el.status}</small>
          </div>
        </div>
        <div className={css.thirdCol}>
          <div>
            <span>{'el.location.country'}</span>
          </div>
          <div>
            <span>{'el.location.city'}</span>
          </div>
        </div>
      </section>)}
      )
    }</div>
</div>
)}
}