import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import store  from './store/store';
import { history } from '../src/helpers/history';
import loginContainer from '../src/containers/loginContainer';
import signupContainer from '../src/containers/signupContainer';
import schoolsContainer from '../src/containers/shoolsContainer'
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';


export class App extends Component {
  render() {

    return(
        <Provider store={store}>
           <div className="jumbotron">
                <ToastContainer/>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                                <Route path="/signup" component={signupContainer} />
                                <Route path="/login" component={loginContainer} />
                                <Route path="/schools" component={schoolsContainer} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        </Provider>
    );
    }
}


  