import React from "react";
import MyPosts from "./MyPosts";
import {setValueTextareaActionCreator, aadPostActionCreator} from '../../redux/posts-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
      return {
        posts : state.posts
      }
}
let mapDispatchToProps = (dispatch) => {
return {
  setValueTextareaActionCreator : (text)=> {dispatch(setValueTextareaActionCreator(text))},
  aadPostActionCreator : (text)=>{dispatch(aadPostActionCreator(text))},
}
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostContainer;
