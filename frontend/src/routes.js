import React from 'react';
import './index.css';
import App from './App';
import {Route, IndexRoute} from 'react-router';
import Tracks from './components/track/Tracks';
import 'bootstrap/dist/css/bootstrap.css';
import ManageTrackPage from './components/track/ManageTrackPage';


export default (
      <Route path="/" component={App}>
        <IndexRoute component={Tracks} />
        <Route path="track" component={ManageTrackPage} />
      </Route>
);