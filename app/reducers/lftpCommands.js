// @flow
import { CONNECT, SERVER_RESPONSE } from '../actions/lftpCommands';

export const InitialState = {
  isConnected: false,
  isConnecting: false,
  connectionDetails: {
    username: '',
    hostname: '',
    password: ''
  },
  responses: []
};

export default function lftpCommands(state: Object = InitialState, action: Object) {
  const { type, payload } = action;

  switch (type) {
    case CONNECT:
      return {
        ...state,
        isConnecting: true,
        connectionDetails: { ...payload }
      };
    case SERVER_RESPONSE:
      return {
        responses: [
          ...state.responses,
          {
            id: state.responses.reduce((maxId, res) => Math.max(res.id, maxId), -1) + 1,
            timestamp: new Date().getTime(),
            message: payload
          }
        ]
      };
    default:
      return state;
  }
}
