import React from 'react';
import Profile from './Profile';
import {getProfileStatus, getUserProfile, updateProfileStatus} from '../../redux/profile-reducer';
import {getDefaultUserImg} from '../../redux/users-selectors';
import {getUserId} from '../../redux/auth-selectors'
import {getProfile, getStatus } from '../../redux/profile-selectors';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.id;
    }
    this.props.getUserProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return <Profile {...this.props} />

  }

}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  id: getUserId(state),
  defaultUserImg: getDefaultUserImg(state),
  status: getStatus(state)
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);