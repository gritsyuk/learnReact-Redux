import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {setValueTextareaActionCreator, aadPostActionCreator} from '../../redux/db';

const MyPosts = (props) => {
  let post = props.posts.postData.map((el) => (
    <Post title='Заголовок' message={el.message} />
  ));
  let newPostElement = React.createRef();

  let updateTextarea = () => {
    let text = newPostElement.current.value;
    props.dispatch(setValueTextareaActionCreator(text));
  };

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(aadPostActionCreator(text));
  };
  return (
    <section className={css.myPosts}>
      <div className={css.postsWrap}>
        <textarea
          name='postText'
          ref={newPostElement}
          onChange={updateTextarea}
          value={props.posts.textareaValue}
        />
        <button id='send' onClick={addPost}>
          Опубликовать
        </button>
      </div>
      <div className={css.postItem}>{post}</div>
    </section>
    //   <footer className="page-footer">
    //   <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
    //   </small>
    // </footer>
  );
};
export default MyPosts;
