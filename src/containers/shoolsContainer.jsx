import { connect } from 'react-redux';

import schoolsComponent from '../components/schools.component';
import  getSchools  from '../actions/schools.actions';
import createSchool from '../actions/createschool.action';
import createStream from '../actions/createstream.action';



const mapStateToProps = ({ schools, createschool, createstream }) => {
    return {
        schools,
        createschool, 
        createstream
    }
};

export default connect(mapStateToProps, {getSchools, createSchool, createStream})(schoolsComponent);
