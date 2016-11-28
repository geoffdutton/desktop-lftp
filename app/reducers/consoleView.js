// @flow
import { ADD_SUCCESS, ADD_ERROR, ADD_INFO, CLEAR_ALL } from '../../app/actions/consoleView';

const InitialState = {
  messages: []
};

export default function settings(state: Object = InitialState, action: Object) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ERROR:
    case ADD_INFO:
    case ADD_SUCCESS:
      return {
        messages: [
          ...state.messages,
          {
            id: state.messages.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            ...payload
          }
        ]
      };
    case CLEAR_ALL:
      return {
        messages: []
      };
    default:
      return state;
  }
}
