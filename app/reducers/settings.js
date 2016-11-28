// @flow
import { GET, SET } from '../actions/settings';

export default function settings(state: Object = {}, action: Object) {
  const { type, payload } = action;

  switch (type) {
    case GET:
      if (typeof state[payload] === 'undefined') {
        return state;
      }
      return state[payload];
    case SET:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
