import React, { Component } from 'react'
import { Form } from "../helpers/formhelper";
import { Link,Redirect } from 'react-router-dom'

export class signupComponent extends Component {
  state ={
    email:'',
    password:'',
    password_confirmation:'',
    username:'',
    token:'',
  }

   componentDidUpdate = (prevProps, prevState) => {
     console.log(this.props)
     if (this.props.signUp.success){
       this.props.history.push('/login')
     }
   }
   

  handleLogin = (e) => {
    e.preventDefault();
    const {signupUser} = this.props
    if (this.state.password == this.state.password_confirmation){
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
                    Do not have an account yet?
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

export default signupComponent
