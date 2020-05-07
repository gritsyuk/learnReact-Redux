import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let post = props.posts.postData.map((el) => (
    <Post title='Заголовок' message={el.message} />
  ));

  let updateSymbol = (e) => {
    let symbol = e.target.value;
    props.setValueTextareaActionCreator(symbol);
  };

  let newPost = () => {
    let text = props.posts.textareaValue; 
    props.aadPostActionCreator(text);
  };
  return (
    <section className={css.myPosts}>
      <div className={css.postsWrap}>
        <textarea
          onChange={updateSymbol}
          value={ props.posts.textareaValue}
        />
        <button id='send' onClick={newPost}>
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
