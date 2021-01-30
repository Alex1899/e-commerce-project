import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectSignInStarted } from "../../redux/user/user.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import SignIn from "./sign-in.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectSignInStarted,
});

const SignInContainer = compose(connect(mapStateToProps), WithSpinner)(SignIn);

export default SignInContainer;
