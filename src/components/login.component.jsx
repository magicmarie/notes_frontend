import React, { Component } from 'react';
import { Form } from '../helpers/helper';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class loginComponent extends Component {
  state ={
    email:'',
    password:'',
    token:'',
  }

   componentDidUpdate = (prevProps, prevState) => {
       const {logIn} =  this.props
    if (logIn.success){
        toast("Succesfully logged in");
        localStorage.setItem("token",logIn.token)
      }
   }


  handleLogin = (e) => {
    e.preventDefault();
    const {loginUser} = this.props
    loginUser(this.state)

  };


  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const formFields = [
      {
        type: "email",
        name: "email",
        label: "Email"
        },
        {
        type: "password",
        name: "password",
        label: "Password"
        },
      ]
    return (
      <div>

        <form onSubmit={this.handleLogin}>
                    <h2 className="text-center form-signin-heading">
                    Log in to your account
                    </h2>
                    <Form formFields={formFields} onChange={this.onChange} />
                    <div>
                    <button type="submit" className="btn btn-primary btn-block">
                       Log In
                    </button>
                    </div>
                    <p />
                    <p className="text-center">
                    Do not have an account yet?
                    <Link href="/signup" to="signup">
                        {" "}
                        Sign Up
                    </Link>
                    </p>
                </form>
      </div>
    )
  }
}

export default loginComponent;