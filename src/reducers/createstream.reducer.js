import Constants from '../constants/constants';
import initialState from './initialState'

const { CREATESTREAM } = Constants


const createstream
 = (state = initialState.schools, action) => {
    const { type,payload } = action;
    switch (type) {
        case `${CREATESTREAM}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
                rejected: false
            };
        case `${CREATESTREAM}_REJECTED`:
            return {
                ...state,
                loading: true,
                success: false,
                rejected: true,
                error: payload.message

            };
        case `${CREATESTREAM}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                created_stream: payload.data
            };
        default:
            return state
    }
}

export default createstream


