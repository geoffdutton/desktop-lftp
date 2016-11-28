// @flow
export const GET_LAST_USED = 'GET_LAST_USED';
export const SET_LAST_USED = 'SET_LAST_USED';

const getLastUsedAction = (key: string) => ({
  type: GET_LAST_USED,
  payload: key
});

const setLastUsedAction = (prop, val) => {
  const payload = {};
  payload[prop] = val;
  return {
    type: SET_LAST_USED,
    payload
  };
};


export function getLastUsed(key: string) {
  return (dispatcher: Function) => {
    dispatcher(getLastUsedAction(key));
  };
}

export function setLastUsed(prop: string, val: mixed) {
  return (dispatcher: Function) => {
    dispatcher(setLastUsedAction(prop, val));
  };
}
