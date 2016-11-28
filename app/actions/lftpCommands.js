// @flow
export const CONNECT = 'CONNECT';
export const SERVER_RESPONSE = 'SERVER_RESPONSE';

export function connect({username, hostname, password}) {
  return (dispatcher: Function) => {
    dispatcher({
      type: CONNECT,
      payload: { username, hostname, password }
    });
  };
}

export function serverResponse(message: string) {
  return (dispatcher: Function) => {
    dispatcher({
      type: SERVER_RESPONSE,
      payload: message
    });
  };
}
