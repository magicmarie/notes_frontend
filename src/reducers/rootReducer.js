import {combineReducers} from 'redux';

import { signUp }from './signup.reducer';
import { logIn } from './login.reducer';

export default combineReducers({
    signUp,
    logIn
});