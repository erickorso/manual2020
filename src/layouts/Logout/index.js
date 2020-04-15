import Logout from "./Logout";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  logoutAction
} from "../../redux/actions/user";
import { clearError } from "../../redux/actions/error";
import { getUserEmail } from '../../redux/selectors/user'

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => logoutAction(dispatch),
  clearError: () => clearError(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout));
