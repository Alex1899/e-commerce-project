import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectSignUpStarted } from "../../redux/user/user.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import SignUp from "./sign-up.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectSignUpStarted,
});

const SignUpContainer = compose(connect(mapStateToProps), WithSpinner)(SignUp);

export default SignUpContainer;
