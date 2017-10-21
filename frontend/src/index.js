import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore';
import routes from './routes';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
