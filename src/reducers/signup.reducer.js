import  Constants  from '../constants/constants';
import initialState from './initialState'

const { SIGNUP } = Constants


export const signUp = (state = initialState.signUp, action) => {
    const { type } = action;
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

