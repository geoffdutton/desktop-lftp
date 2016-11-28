// @flow
export const ADD_INFO = 'ADD_INFO';
export const ADD_ERROR = 'ADD_ERROR';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const CLEAR_ALL = 'CLEAR_ALL';

const getPayload = (type: string) => {
  const payload = {
    label: 'Status:',
    color: 'black'
  };
  switch (type) {
    case ADD_INFO:
      return payload;
    case ADD_ERROR:
      payload.color = 'red';
      payload.label = 'Error:';
      return payload;
    case ADD_SUCCESS:
      payload.color = 'green';
      payload.label = 'Success:';
      return payload;
    default:
      return payload;
  }
};

const add = (type: string, message: string) => ({
  type,
  payload: { ...getPayload(type), message }
});

const clear = () => ({ type: CLEAR_ALL });

export function info(message: string) {
  return (dispatcher: Function) => {
    dispatcher(add(ADD_INFO, message));
  };
}

export function error(message: string) {
  return (dispatcher: Function) => {
    dispatcher(add(ADD_ERROR, message));
  };
}

export function success(message: string) {
  return (dispatcher: Function) => {
    dispatcher(add(ADD_SUCCESS, message));
  };
}

export function clearAll() {
  return (dispatcher: Function) => {
    dispatcher(clear());
  };
}
