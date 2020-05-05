import React from "react";
import styleClass from "./Message.module.css";

const Message = (props) => {
  const MessageBlock = (props) => {
    return <div className={styleClass.msgBox}><p>{props.message}</p></div>;
  };
  let arrMsgData = props.dialogs.msgData.map((msg) => (
    <MessageBlock message={msg.message} />
  ));
  return (
    <div>{arrMsgData}</div>
  );
};
export default Message;
