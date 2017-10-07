import React, { Component } from 'react';
import Header from './components/common/Header'
import './App.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTracks, loadUnits} from './actions/trackActions';


const store = configureStore();

store.dispatch(loadTracks());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <div className="container-fluid" style={{width: '65%', margin: '0 auto'}}>
              <div> <Header/></div>
            </div>
            <div className="container-fluid" style={{width: '50%', margin: '0 auto'}}>
              {this.props.children}
            </div>
          </div>
        </Provider>
    );
  }
}

export default App;
