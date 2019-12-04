import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from "../helpers/helper";


const Login = ({
        email,
        password,
        onChange,
        handleLogin
    }) =>{
        const formFields = [
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
            }
        ];
        return (
            <div className="row justify-content-md-center">
            <div className="col-md-5">
                <div className="jumbotron">
                <form onSubmit={handleLogin}>
                    <h2 className="text-center form-signin-heading">
                    Log in to your account
                    </h2>
                    <Form formFields={formFields} onChange={onChange} />
                    <div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>
                    </div>
                    <p />
                    <p className="text-center">
                    Do not have an account yet?
                    <Link href="/signup" to="/signup">
                        {" "}
                        Sign Up
                    </Link>
                    </p>
                </form>
                </div>
            </div>
            </div>
        );
    }

export default Login