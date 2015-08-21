import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose, bindActionCreators } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';

import * as reducers from './reducers';
import App from './components/App';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

global.jQuery = global.$ = require('jquery');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');
require('./helpers/bootstrap-modal');

React.render(
  <div>
    <Provider store={store}>
      {()=><App/>}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store}
               monitor={LogMonitor} />
    </DebugPanel>
  </div>, document.body);
