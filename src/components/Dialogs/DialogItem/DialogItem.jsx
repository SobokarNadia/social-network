import React from "react";
import { NavLink } from "react-router-dom";
import cl from "../Dialogs.module.scss";

const DialogItem = (props) => {
  return (
    <div className={cl.item}>
      <NavLink to={`/dialogs/${props.id}`} className={cl.link}>
        <img className={cl.userPhoto} src={props.img} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
