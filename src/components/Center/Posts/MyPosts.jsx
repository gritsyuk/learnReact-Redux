import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { setValueTextarea } from '../../redux/db';

const MyPosts = (props) => {

  let post = props.posts.map(el => <Post title="Заголовок" message={el.message} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);

  }
  let updateTextarea = () => {
    let text = newPostElement.current.value;
    setValueTextarea(text);
  }


  return (
    <section className={s.myPosts}>
      <div className={s['sendposts-wrap']} >
        <textarea name="postText" ref={newPostElement} onChange={updateTextarea} value={props.textarea} />
        <button id="send" onClick={addPost}>Опубликовать</button>
      </div>
      <div className={s.postItem}>
        {post}
      </div>


    </section>
    //   <footer className="page-footer">
    //   <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
    //   </small>
    // </footer>
  );
}
export default MyPosts;

