import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/auth-selectors";

const HeaderContainer = (props) => {
  return <Header {...props}/>;
  
}

let mapStateToProps = (state) => ({
  isAuth: getIsAuth(state) ,
  login: getLogin(state) 
});

export default connect(mapStateToProps, { logout})(HeaderContainer);
