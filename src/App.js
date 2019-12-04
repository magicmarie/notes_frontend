import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store  from './store/store';

import './App.css';
import { history } from '../src/helpers/history';
import { PrivateRoute } from '../src/components/privateRoute';
import { HomePage } from '../src/components/homePage';
import { LoginContainer } from '../src/containers/loginContainer';
import { SignupContainer } from '../src/containers/signupContainer';



class App extends Component {
  render() {

    return(
        <Provider store={store}>
           <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/signup" component={SignupContainer} />
                                <Route path="/login" component={LoginContainer} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        </Provider>
    );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

  