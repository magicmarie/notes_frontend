import { connect } from 'react-redux';

import schoolsComponent from '../components/schools.component';
import  getSchools  from '../actions/schools.actions';
import createSchool from '../actions/createschool.action';


const mapStateToProps = ({ schools, createschool }) => {
    return {
        schools,
        createschool
    }
};

export default connect(mapStateToProps, {getSchools, createSchool})(schoolsComponent);
