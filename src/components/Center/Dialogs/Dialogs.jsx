import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import {setValueTextareaActionCreatorMsg, aadMsgActionCreator} from '../../redux/dialogs-reducer';

const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let arrDialogsData = props.dialogs.dialogsData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));


  let newMessageBody = props.dialogs.textMsgCart;
  let updateTextarea = (e) => {
    let body = e.target.value;
    props.dispatch(setValueTextareaActionCreatorMsg(body));
  };
 let pushMsg = () => {
  props.dispatch(aadMsgActionCreator(newMessageBody));

 }
  
  return (
    <section className={s.dialogs}>
      <div className={s.dialogsCol1}>{arrDialogsData}</div>
      <div className={s.dialogsCol2}>
        <div className={s.msgWrapper}>
          {<Message dialogs={props.dialogs} />}
        </div>
        <div className={s.sendMsgWrap}>
          <textarea onChange={updateTextarea} value={newMessageBody} />
          <button className={s.sendButtonMsg} onClick={pushMsg} >Send</button>
        </div>
      </div>
      <div className={s.dialogsCol3}></div>
    </section>
  );
};
export default Dialogs;
