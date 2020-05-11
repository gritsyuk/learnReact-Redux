import React from "react";
import Dialogs from "./Dialogs";
import {
  setValueTextareaActionCreatorMsg,
  aadMsgActionCreator,
} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//   let newMessageBody = props.dialogs.textMsgCart;

//   let updateTextarea = (body) => {
//     props.dispatch(setValueTextareaActionCreatorMsg(body));
//   };
//   let pushMsg = () => {
//     props.dispatch(aadMsgActionCreator(newMessageBody));
//   };
//   return (
//     <Dialogs
//       setValueTextareaActionCreatorMsg={updateTextarea}
//       aadMsgActionCreator={pushMsg}
//       dialogs={props.dialogs}
//     />
//   );
// };
let mapStateToProps = (state)=>{return {dialogs: state.dialogs}}
let mapDispatchToProps = (dispatch)=>{
  return { 
    setValueTextareaActionCreatorMsg: (body)=>{dispatch(setValueTextareaActionCreatorMsg(body))},
    aadMsgActionCreator : (newMessageBody)=>{dispatch(aadMsgActionCreator(newMessageBody))}
}}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
