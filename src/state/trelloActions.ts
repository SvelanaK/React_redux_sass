import actionTypes from './actionTypes';

export function getCurrentUser(payload: unknown) {
  return {
    type: actionTypes.GET_CURRENT_USER,
    payload,
  };
};


export function setSelectTab(payload: unknown) {
  return {
    type: actionTypes.SET_SELECT_TAB,
    payload,
  };
};
