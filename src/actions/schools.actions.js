import constants from '../constants/constants';
import api from './api';

const { SCHOOLS } = constants;
const getSchools = () => (
    {
        type: SCHOOLS,
        payload: api(
            {
                method: 'get',
                url: '/schools'
            }
        )
    }
);

export default getSchools