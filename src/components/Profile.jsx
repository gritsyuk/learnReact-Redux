import React from "react";
import MyPosts from "./Center/Posts/MyPosts";
const Profile = (props) => {
  return (
    <section>
      <MyPosts posts={props.posts} dispatch={props.dispatch} />
    </section>
    // <section className="grid">
    //   <article></article>
    //   <article></article>
    //   <article></article>
    //   <article></article>
    //   <article></article>
    //   <article></article>
    //   <article></article>
    //   <article></article>
    // </section>
    //   <footer className="page-footer">
    //   <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
    //   </small>
    // </footer>
  );
};
export default Profile;
