import initialState from './initialState';
import { userConstants } from '../constants/user.constants';

const { LOGIN } = userConstants

export const logIn = (state = initialState.logIn, action) => {
    const { type, payload = {} } = action;
    const {data= {} } = payload
    switch (type) {
        case `${LOGIN}_PENDING`:
            console.log('pending')
            return {
                ...state,
                loading: true,
                success: false,
            };
        case `${LOGIN}_REJECTED`:
            console.log('rejected')
            return {
                ...state,
                loading: false,
                success: false,
                rejected: true,
            };
        case `${LOGIN}_FULFILLED`:
            console.log(payload)
            return {
                ...state,
                loading: false,
                success: true,
                token: data.auth_token
            };
        default:
            return state
    }
} 