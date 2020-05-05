import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let arrDialogsData = props.dialogs.dialogsData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));
  let arrMsgData = props.dialogs.msgData.map((msg) => (
    <Message message={msg.message} />
  ));

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsCol1}>
        {arrDialogsData}
        {/* <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} /> */}
      </div>
      <div className={s.dialogsCol2}>
        <div className={s.msgWrapper}>{arrMsgData}</div>
        <div className={s.sendMsgWrap}>
          <textarea />
            <button className={s.sendButtonMsg}>Отправить</button>
        </div>
        
      </div>
      <div className={s.dialogsCol3}></div>
    </section>
  );
};
export default Dialogs;
