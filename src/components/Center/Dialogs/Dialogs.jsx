import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

let arrDialogsData = props.arrData.map( el => <DialogItems name={el.name} id={el.id} />);
let arrMsgData = props.arrMsg.map(msg => <Message message={msg.message} />);

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsItems}>
        {arrDialogsData}
          {/* <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} /> */}
        </div>
      <div className={s.messages}>
        {arrMsgData}
      </div>
    </section>
  );
}
export default Dialogs;