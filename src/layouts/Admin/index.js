import Admin from "./Admin";
import { connect } from "react-redux";
import {getUser} from '../../redux/selectors/user'
import { logoutAction } from "../../redux/actions/user";

const mapStateToProps = (state) => ({
  user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => logoutAction(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
