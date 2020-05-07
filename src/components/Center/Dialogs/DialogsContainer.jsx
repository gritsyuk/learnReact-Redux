import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialogs from "./Dialogs";
import {
  setValueTextareaActionCreatorMsg,
  aadMsgActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let newMessageBody = props.dialogs.textMsgCart;

  let updateTextarea = (body) => {
    props.dispatch(setValueTextareaActionCreatorMsg(body));
  };
  let pushMsg = () => {
    props.dispatch(aadMsgActionCreator(newMessageBody));
  };
  return (
    <Dialogs
      setValueTextareaActionCreatorMsg={updateTextarea}
      aadMsgActionCreator={pushMsg}
      dialogs={props.dialogs}
    />
  );
};
export default DialogsContainer;
