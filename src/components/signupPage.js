import React from "react";
import { Link } from "react-router-dom";

import { Form } from "../helpers/helper";

const SignUp = ({
    username,
    email,
    password,
    password_confirmation,
    onChange,
    handleSignup
}) => {
    const formFields = [
      {
        type: "text",
        name: "username",
        value: username,
        label: "Username"
      },
      {
        type: "email",
        name: "email",
        value: email,
        label: "Email"
      },
      {
        type: "password",
        name: "password",
        value: password,
        label: "Password"
      },
      {
        type: "password",
        name: "password_confirmation",
        value: password_confirmation,
        label: "Password_confirmation"
      }
    ];
    return (
        <div className="row justify-content-md-center">
        <div className="col-md-5">
          <div className="jumbotron">
            <form onSubmit={handleSignup}>
              <h3 className=" text-center form-signin-heading">
                New user, Create an account
              </h3>
              <Form formFields={formFields} onChange={onChange} />
              <div>
                <button type="submit" className="btn btn-primary btn-block">
                  Signup
                </button>
              </div>
              <p />
              <p className="text-center">
                Already have an account?
                <Link href="/login" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp