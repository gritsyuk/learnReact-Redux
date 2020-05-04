import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (
        <article className = {s.post}>
          <div className={s.item}>
          <h2>{props.title}</h2>  
          <p>{props.message}</p>
          </div>
        </article>

    //   <footer className="page-footer">
    //   <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
    //   </small>
    // </footer>
     );
  }
  export default Post;