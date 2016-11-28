// @flow
export const SET = 'SET';
export const GET = 'GET';

const setSettingAction = (keyOrObject: mixed, maybeValue: mixed) => {
  let payload = keyOrObject;
  if (typeof keyOrObject === 'string') {
    payload = {};
    payload[keyOrObject] = maybeValue;
  }
  return {
    type: SET,
    payload
  };
};

const getSettingAction = (key: string) => ({
  type: GET,
  payload: key
});

export function getSetting(key: string) {
  return (dispatcher: Function) => {
    dispatcher(getSettingAction(key));
  };
}

export function setSetting(keyOrObject: mixed, maybeValue: mixed) {
  return (dispatcher: Function) => {
    dispatcher(setSettingAction(keyOrObject, maybeValue));
  };
}
