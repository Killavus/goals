import React, { Component } from 'react';
import Header from './components/common/Header'
import './App.css';




class App extends Component {
  render() {
    return (
            <div>
              <div className="container-fluid" style={{width: '65%', margin: '0 auto'}}>
                <div> <Header/></div>
              </div>
              <div className="container-fluid" style={{width: '50%', margin: '0 auto'}}>
                {this.props.children}
              </div>
            </div>

    );
  }
}

export default App;
