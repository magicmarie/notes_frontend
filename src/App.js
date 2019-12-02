import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store  from './store/store';

import './App.css';


export class App extends Component {
  render() {
    return(
        <Provider store={store}>
            <div>
                <h2>Welcome to Notes App </h2>
            </div>
        </Provider>
    );
}
}
  export default App;

  