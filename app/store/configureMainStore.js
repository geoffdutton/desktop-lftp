import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { electronEnhancer } from 'redux-electron-store';
import rootReducer from '../reducers';

const persistWhitelist = ['auth'];

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default function configureStore(initialState: Object) {
  let enhancer;
  if (process.env.NODE_ENV === 'test') {
    enhancer = compose(
      applyMiddleware(thunk, logger)
    );
  }
  else {
    enhancer = compose(
      autoRehydrate(),
      applyMiddleware(thunk, logger),
      electronEnhancer({
        // Allows synched actions to pass through all enhancers
        dispatchProxy: a => store.dispatch(a),
      })
    );
  }

  const store = createStore(rootReducer, initialState, enhancer);
  persistStore(store, { whitelist: persistWhitelist });

  require('electron').ipcMain
    .on('renderer-reload', (event) => {
      delete require.cache[require.resolve('../reducers')];
      store.replaceReducer(require('../reducers'));
      event.returnValue = true;
    });

  return store;
}
