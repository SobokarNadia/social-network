import { connect } from 'react-redux';
import { likesCounter } from '../../../../redux/profile-reducer';
import Post from './Post';
import {getDefaultUserImg} from "../../../../redux/users-selectors";
import {getProfile} from "../../../../redux/profile-selectors";


let mapStateToProps = (state, ownProps) => {
  return{
    message: state.profilePage.postData[ownProps.id-1].message,
    id: state.profilePage.postData[ownProps.id-1].id,
    likes: state.profilePage.postData[ownProps.id-1].likes,
    defaultUserImg: getDefaultUserImg(state),
    profile: getProfile(state)
  }
}


const PostContainer = connect(mapStateToProps, {likesCounter})(Post);

export default PostContainer;