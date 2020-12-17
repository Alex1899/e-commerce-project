import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-buttom.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };    
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});

    }catch(e){
      console.log(e);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            type="email"
            label="Email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;