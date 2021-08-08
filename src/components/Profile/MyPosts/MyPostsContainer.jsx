import { connect } from "react-redux";
import {
  addPost,
} from "../../../redux/profile-reducer";
import {
  getPostData
} from "../../../redux/profile-selectors";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: getPostData(state)
  }
};


const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
