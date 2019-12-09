import { userConstants } from '../constants/user.constants';
import initialState from './initialState'
import { type } from 'os';

const { SIGNUP, LOGIN } = userConstants
export const signUp = (state = initialState.signUp, action) => {
    const { type, payload = {} } = action;
    switch (type) {
        case `${SIGNUP}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case `${SIGNUP}_REJECTED`:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case `${SIGNUP}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
            };
        default:
            return state
    }
}

export const logIn = (state = initialState.logIn, action) => {
    const { type, payload = {} } = action;
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
                loading: true,
                success: false,
                rejected: true,
            };
        case `${LOGIN}_SUCCESS`:
            return {
                ...state,
                loading: true,
                success: false,
            };
        default:
            return state
    }
}