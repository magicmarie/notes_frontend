import React from "react";
import {connect} from 'react-redux';

import SignUp from '../components/signupPage';
import { userActions } from '../actions/user.action';


class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  }

  onChange= e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}
  handleSignup = e => {
    e.preventDefault();
    userActions.signupUser(this.state)    
      .then(
        this.props.history.push("/login")
      )
  };

  render() {
    const { email, username, password, password_confirmation } = this.state;
    return (
      <div>
        <SignUp
        username={username}
        email={email}
        password={password}
        password_confirmation={password_confirmation}
        onChange={this.onChange}
        onSubmit={this.handleSignup}
        error_message={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const connectedSignupContainer = connect(mapStateToProps, {userActions})(SignupContainer);
export { connectedSignupContainer as SignupContainer }; 
