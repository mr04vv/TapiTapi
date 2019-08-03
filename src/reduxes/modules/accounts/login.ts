import apiClient from 'utilities/apiClient';
import { Dispatch } from 'redux';
import { createActionCreator, createReducer } from 'deox';

const MODULE_NAME = 'login';
const initialState = {
  data: {},
};

// Constants
export const LOGIN = `redux/${MODULE_NAME}`;
export const LOGIN_SUCCESS = `redux/${MODULE_NAME}/LOGIN_SUCCESS`;
export const LOGIN_FAIL = `redux/${MODULE_NAME}/LOGIN_FAIL`;
export const LOGOUT = `redux/${MODULE_NAME}/LOGOUT`;
export const CHANGE_LOGIN_STATUS = `redux/${MODULE_NAME}/CHANGE_LOGIN_STATUS`;

// Actions
export const isLoading = createActionCreator(LOGIN);
const loginSuccess = createActionCreator(LOGIN_SUCCESS, resolve => (res: object) => resolve(res));
const loginFail = createActionCreator(LOGIN_FAIL, resolve => (err: string) => resolve(err));
const logout = createActionCreator(LOGOUT);
export const changeLoginStatus = createActionCreator(CHANGE_LOGIN_STATUS);

// Reducer
const login = createReducer(initialState, handleAction => [
  handleAction(isLoading, state => ({
    ...state,
    loading: true,
  })),
  handleAction(loginSuccess, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
    status: 'success',
  })),
  handleAction(loginFail, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
    status: 'fail',
  })),
  handleAction(logout, state => ({
    ...state,
    data: {},
    loading: false,
    status: 'logout',
  })),
  handleAction(changeLoginStatus, state => ({
    ...state,
    status: null,
  })),
]);

export default login;

// GET Data
export const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
  const data = { email, password };
  dispatch(isLoading());
  const res = await apiClient.post('/api/logins', data).catch((err) => {
    dispatch(loginFail(err));
    throw err;
  });
  dispatch(loginSuccess(res.data));
};

export const signOut = () => async (dispatch: Dispatch) => {
  dispatch(logout());
};
