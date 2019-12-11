import Constants from '../constants/constants';
import initialState from './initialState'

const { SCHOOLS } = Constants


const schools = (state = initialState.schools, action) => {
    const { type,payload } = action;
    switch (type) {
        case `${SCHOOLS}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case `${SCHOOLS}_REJECTED`:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case `${SCHOOLS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                schools_list: payload.data
            };
        default:
            return state
    }
}

export default schools

