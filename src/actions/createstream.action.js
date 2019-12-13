import constants from '../constants/constants';
import api from './api';

const {CREATESTREAM } = constants;
const createSchool = (id, data) => (
    {
        type: CREATESTREAM,
        payload: api(
            {
                method: 'post',
                url: `/schools/${id}/streams`,
                data: data

            }
        )
    }
);

export default createSchool