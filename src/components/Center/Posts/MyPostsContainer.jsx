import React from "react";
import MyPosts from "./MyPosts";
import {setValueTextareaActionCreator, aadPostActionCreator} from '../../redux/posts-reducer';

const MyPostContainer = (props) => {

  let updateTextarea = (text) => {
    props.dispatch(setValueTextareaActionCreator(text));
  };
  let addPost = (text) => {
    props.dispatch(aadPostActionCreator(text));
  };
  return <MyPosts posts = {props.posts} setValueTextareaActionCreator={updateTextarea} aadPostActionCreator={addPost} />
};
export default MyPostContainer;
