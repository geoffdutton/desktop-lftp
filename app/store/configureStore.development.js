import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import { electronEnhancer } from 'redux-electron-store';
import rootReducer from '../reducers';

import * as consoleViewActions from '../actions/consoleView';
import * as counterActions from '../actions/counter';
import * as authActions from '../actions/auth';

// Need to add new actions in reduces/index.js

const actionCreators = {
  ...consoleViewActions,
  ...authActions,
  ...counterActions,
  push,
};

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actionCreators,
  }) :
  compose;
/* eslint-enable no-underscore-dangle */

export default function configureStore(initialState: Object) {
  let enhancer;
  if (process.env.NODE_ENV === 'test') {
    enhancer = composeEnhancers(
      applyMiddleware(thunk, router, logger)
    );
  }
  else {
    enhancer = composeEnhancers(
      applyMiddleware(thunk, router, logger),
      electronEnhancer({
        // Allows synched actions to pass through all enhancers
        dispatchProxy: a => store.dispatch(a),
      })
    );
  }

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      require('electron').ipcRenderer.sendSync('renderer-reload'); // eslint-disable-line global-require
      store.replaceReducer(require('../reducers')); // eslint-disable-line global-require
    });
  }
  return store;
}
