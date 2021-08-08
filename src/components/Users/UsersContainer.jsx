import { connect } from "react-redux";
import {
  followToggle,
  totalUsersNumber, requestUsers,
} from "../../redux/users-reducer";
import {getUsers, getPageNumberUsers, getTotalNumberUsers, getCurrentPage, getIsFetching, getDefaultUserImg, 
  getIsFollowingProgress,getFollowingUsers} from '../../redux/users-selectors';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersContainerComp extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageNumberUsers, this.props.currentPage);
  }

  setCurrentPage = (pageNumber) => {
    this.props.requestUsers (this.props.pageNumberUsers, pageNumber);

  };

  render() {
    return (
        <>
          {this.props.isFetching ? <Preloader/> : <Users
              totalNumberUsers={this.props.totalNumberUsers}
              pageNumberUsers={this.props.pageNumberUsers}
              currentPage={this.props.currentPage}
              users={this.props.users}
              defaultUserImg={this.props.defaultUserImg}
              isFollowingProgress={this.props.isFollowingProgress}
              followToggle={this.props.followToggle}
              setCurrentPage={this.setCurrentPage}
          />}

        </>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    users: getFollowingUsers(state),
    pageNumberUsers: getPageNumberUsers(state),
    totalNumberUsers: getTotalNumberUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    defaultUserImg: getDefaultUserImg(state),
    isFollowingProgress: getIsFollowingProgress(state),
  };
};


export default compose(
    connect(mapStateToProps, {
  totalUsersNumber, followToggle, requestUsers}),
withAuthRedirect
)(UsersContainerComp);