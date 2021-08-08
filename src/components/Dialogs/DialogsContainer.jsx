import { connect } from "react-redux";
import {
  sendMessage
} from "../../redux/dialog-reducer";
import {getDefaultUserImg} from '../../redux/users-selectors';
import {getMessagesData, getDialogsData} from '../../redux/dialog-selectors';
import Dialogs from "./Dialogs";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state),
    defaultImg: getDefaultUserImg(state),
  };
};

export default compose(
    connect(mapStateToProps, { sendMessage}),
    withAuthRedirect
)(Dialogs);
