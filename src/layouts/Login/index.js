import Login from "./Login";
import { connect } from "react-redux";
import {
  loginAction,
  signInAction,
  signInErrorAction,
  loginErrorAction,
} from "../../redux/actions/user";
import {
  clearError
} from "../../redux/actions/error";

import {getErrorCode, getErrorMessage} from '../../redux/selectors/error'

const mapStateToProps = (state) => ({
  errorCode: getErrorCode(state), 
  errorMessage: getErrorMessage(state), 
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (user) => loginAction(user, dispatch),
  signInAction: (user) => signInAction(user, dispatch),
  signInErrorAction: (error) => signInErrorAction(error, dispatch),
  loginErrorAction: (error) => loginErrorAction(error, dispatch),
  clearError: () => clearError(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
