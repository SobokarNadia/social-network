import "./App.scss";
import {  Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { connect } from "react-redux";
import {compose}  from 'redux';
import Preloader from "./components/Preloader/Preloader";
import { initialisedApp } from "./redux/app-reducer";
import {getInitialised} from './redux/app-selectors';


class App extends React.Component {
  componentDidMount() {
    this.props.initialisedApp();
  }
  render() {
    if (!this.props.initialiseSuccess){
      return <Preloader />
    }else{
      return (
      <div className="app-wrapper">
        <HeaderContainer />
          <NavbarContainer />
          <div className="content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer  />}
            />
            <Route
              path="/users"
              render={() => <UsersContainer />}
            />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
          </div>
      </div>
  )}   
}
};

let mapStateToProps = (state) => ({
  initialiseSuccess: getInitialised(state)
})

export default compose(withRouter,
connect(mapStateToProps, {initialisedApp}))(App);
