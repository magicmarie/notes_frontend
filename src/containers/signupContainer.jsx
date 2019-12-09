import {connect} from 'react-redux';

import signupComponent from '../components/signup.component';
import { signupUser } from '../actions/user.action';


const mapStateToProps = ({signUp}) => {
    return {
        signUp
    }
} ;

export default connect(
    mapStateToProps,
    { signupUser },
  )(signupComponent);
