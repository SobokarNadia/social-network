import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import cl from "./Navbar.module.scss";


const Navbar = (props) => {

  let activeStyle = { color: "#03007D" };


  return (
    <div className={cl.navbar}>
      <nav className={cl.nav}>
        {props.navbarElements.map((el) => (
          <div className={cl.nav_li} key={el.id}>
            <NavLink
              to={`/${el.name.toLowerCase()}`}
              className={cl.nav_link}
              activeStyle={activeStyle}
            >
              <img src={props.location.pathname.includes(el.name.toLowerCase()) ? el.selectedIconPath : el.iconPath} alt={`${el.name}Icon`} className={cl.icon} />
              {el.name}
            </NavLink>
          </div>
        ))}
      </nav>
      {/* <FriendsContainer /> */}
      <img src={props.navbarElements[0].path} />
    </div>
  );
};

export default Navbar;
