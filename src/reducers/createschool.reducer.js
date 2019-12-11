import Constants from '../constants/constants';
import initialState from './initialState'

const { CREATESCHOOL } = Constants


const createschool = (state = initialState.schools, action) => {
    const { type,payload } = action;
    switch (type) {
        case `${CREATESCHOOL}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
                rejected: false
            };
        case `${CREATESCHOOL}_REJECTED`:
            return {
                ...state,
                loading: true,
                success: false,
                rejected: true,
                error: payload.message

            };
        case `${CREATESCHOOL}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                created_school: payload.data
            };
        default:
            return state
    }
}

export default createschool

