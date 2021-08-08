import React from "react";
import cl from "../Dialogs.module.scss";

const Message = (props) => {
  return <div className={cl[props.className]}>{props.text}</div>
}

export default Message;