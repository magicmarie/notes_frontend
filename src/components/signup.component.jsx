import React, { Component } from 'react'
import { Form } from "../helpers/helper";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export class signupComponent extends Component {
  state ={
    email:'',
    password:'',
    password_confirmation:'',
    username:''
  }

   componentDidUpdate = (prevProps, prevState) => {
     if (this.props.signUp.success){
       toast("Succesfully signed up");
       this.props.history.push('/login')
     }
   }


  handleLogin = (e) => {
    e.preventDefault();
    const {signupUser} = this.props
    if (this.state.password === this.state.password_confirmation){

      signupUser(this.state)
    }
  };



  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const formFields = [
      {
        type: "text",
        name: "username",
        label: "Username"
        },
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
        {
          type: "password",
          name: "password_confirmation",
          label: "Confirm Password"
        }
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
                        Sign Up
                    </button>
                    </div>
                    <p />
                    <p className="text-center">
                    Already have an account
                    <Link href="/login" to="login">
                        {" "}
                        Login
                    </Link>
                    </p>
                </form>
      </div>
    )
  }
}

export default signupComponent;