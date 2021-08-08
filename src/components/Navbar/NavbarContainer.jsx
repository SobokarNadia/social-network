import Navbar from "./Navbar";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {getSidebarElements} from '../../redux/sidebar-selectors';

let mapStateToProps = (state) => ({
  navbarElements: getSidebarElements(state)
});


let NavbarRouterContainer = withRouter(Navbar)

export default connect(mapStateToProps)(NavbarRouterContainer);
