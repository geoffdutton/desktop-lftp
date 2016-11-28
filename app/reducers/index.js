// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import auth from './auth';
import consoleView from './consoleView';

const rootReducer = combineReducers({
  consoleView,
  auth,
  counter,
  routing
});

export default rootReducer;
