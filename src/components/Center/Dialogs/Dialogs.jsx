import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import {setValueTextareaActionCreatorMsg, aadMsgActionCreator} from '../../redux/db';

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

  const BoxMsgTextarea = React.createRef();

  let updateTextarea = () => {
    let qq = BoxMsgTextarea.current.value;
    props.dispatch(setValueTextareaActionCreatorMsg(qq));
  };
 let pushMsg = () => {
  let text = props.dialogs.textMsgCart;
  props.dispatch(aadMsgActionCreator(text));

 }
  
  return (
    <section className={s.dialogs}>
      <div className={s.dialogsCol1}>{arrDialogsData}</div>
      <div className={s.dialogsCol2}>
        <div className={s.msgWrapper}>
          {<Message dialogs={props.dialogs} />}
        </div>
        <div className={s.sendMsgWrap}>
          <textarea ref={BoxMsgTextarea} onChange={updateTextarea} value={props.dialogs.textMsgCart} />
          <button className={s.sendButtonMsg} onClick={pushMsg} >Send</button>
        </div>
      </div>
      <div className={s.dialogsCol3}></div>
    </section>
  );
};
export default Dialogs;
