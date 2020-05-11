import React from "react";
import css from "./UsersItem.module.css";
const NONE_LOGO= "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png";

export default class UsersItem extends React.Component {
  actionCreater = (e) => {
    let idUser = this.props.id;
    (e.target.textContent === "unfollow")
      ? this.props.unfollowAction(idUser)
      : this.props.followAction(idUser);
  };
  render() {
    return (
      <section className={css.usersPage} key={this.props.key}>
        <div className={css.firsCol}>
          <div>
            <img src={(!this.props.img.small) ? NONE_LOGO : this.props.img.small} />
          </div>
          <div>
            <button onClick={this.actionCreater}>
              {this.props.followed === true ? "unfollow" : "follow"}
            </button>
          </div>
        </div>
        <div className={css.secondCol}>
          <div>
            <b>{this.props.name}</b>
          </div>
          <div>
            <small>{this.props.status}</small>
          </div>
        </div>
        <div className={css.thirdCol}>
          <div>
            <span>{'this.props.location.country'}</span>
          </div>
          <div>
            <span>{'this.props.location.city'}</span>
          </div>
        </div>
      </section>
    );
  }
}

