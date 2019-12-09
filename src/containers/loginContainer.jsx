import React from 'react';
import { connect } from 'react-redux';

import loginComponent from '../components/login.component';
import { loginUser } from '../actions/user.action';


const mapStateToProps = ({ logIn }) => {
    return {
        logIn
    }
};
export default connect(mapStateToProps, { loginUser })(loginComponent);
