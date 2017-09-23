import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';
import Tracks from './components/track/Tracks';



ReactDOM.render( (
                  <Router history={browserHistory}>
                   <Route path="/" component={App}>
                    <IndexRoute component={Tracks} />
                   </Route>
                 </Router>), document.getElementById('root'));
registerServiceWorker();
