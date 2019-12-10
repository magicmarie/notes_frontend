import { connect } from 'react-redux';

import schoolsComponent from '../components/schools.component';
import  getSchools  from '../actions/schools.actions';


const mapStateToProps = ({ schools }) => {
    return {
        schools
    }
};

export default connect(mapStateToProps, {getSchools})(schoolsComponent);
