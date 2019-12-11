import constants from '../constants/constants';
import api from './api';

const {CREATESCHOOL } = constants;
const createSchool = (data) => (
    {
        type: CREATESCHOOL,
        payload: api(
            {
                method: 'post',
                url: `/schools`,
                data: data

            }
        )
    }
);

export default createSchool