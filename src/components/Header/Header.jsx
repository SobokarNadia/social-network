import React from "react";
import cl from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cl.header}>
      <img className={cl.logo} src={logo} />
      <div className={cl.logging}>
        {props.isAuth ? (
            <div>{props.login} <a href={'#'} onClick={props.logout}>Log out</a></div>
        ) : (
          <NavLink to={"/login"} className={cl.link}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
