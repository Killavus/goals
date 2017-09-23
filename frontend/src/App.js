import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTracks} from './actions/trackActions';
const store = configureStore();

store.dispatch(loadTracks());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
          {this.props.children}
        </div>
        </Provider>
    );
  }
}

export default App;
