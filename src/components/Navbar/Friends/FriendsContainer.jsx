import { connect } from "react-redux";
import Friends from "./Friends";
import {getFriendsData} from '../../../redux/sidebar-selectors'


let mapStateToProps = (state) => {
  return {
    friendsData: getFriendsData(state)
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
