import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/loginPage';
import { userActions } from '../actions/user.action';


class LoginContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLogin = e => {
        e.preventDefault();
        userActions.loginUser(this.state)
        .then(response => {
            localStorage.setItem("token", response.data.auth_token);
            this.props.history.push('/');
        })
    }

    render() {
        const { email, password} = this.state;
        return (
            <div>
                <Login
                email={email}
                password={password}
                onChange={this.onChange}
                onSubmit={this.handleLogin}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const connectedLoginContainer = connect(mapStateToProps)(LoginContainer);
export { connectedLoginContainer as LoginContainer }; 