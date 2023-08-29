import { userArr } from '../mockData/userList';
import { IAction, IState } from '../types/types';
import actionTypes from './actionTypes';

const initialState: IState = {
  usersArr: userArr,
  currentUser: null,
  selectTab: 'notions',
};

function userReducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER: {
      return {
        ...state,
        currentUser:
          typeof action.payload === 'string'
            ? state.currentUser
            : action.payload,
      };
    }
    case actionTypes.SET_SELECT_TAB: {
      return {
        ...state,
        selectTab:
          typeof action.payload === 'string' ? action.payload : state.selectTab,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
