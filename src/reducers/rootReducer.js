import {combineReducers} from 'redux';

import { signUp }from './signup.reducer';
import { logIn } from './login.reducer';
import schools from './schools.reducer'
import createschool from './createschool.reducer'

export default combineReducers({
    signUp,
    logIn,
    schools,
    createschool
});