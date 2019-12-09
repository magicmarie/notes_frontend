import { userConstants } from '../constants/user.constants';
import initialState from './initialState'

const { SIGNUP } = userConstants


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

