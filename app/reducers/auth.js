// @flow
import { GET_LAST_USED, SET_LAST_USED } from '../actions/auth';

const InitialState = {
  lastUsed: {
    hostname: '',
    username: '',
    port: 22
  }
};

export default function settings(state: Object = InitialState, action: Object) {
  const { type, payload } = action;

  switch (type) {
    case GET_LAST_USED:
      return state.lastUsed[payload] || '';
    case SET_LAST_USED:
      return {
        lastUsed: Object.assign({}, state.lastUsed, payload)
      };
    default:
      return state;
  }
}
