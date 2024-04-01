import * as UserConstants from "../Constants/UserConstants";
import * as UserAPI from "../APIs/UserServices";
import { ErrorsAction } from "../Protection";

// Login action
const loginAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: UserConstants.USER_LOGIN_REQUEST });
    const response = await UserAPI.loginService(datas);
    dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, UserConstants.USER_LOGIN_FAIL);
  }
};

// Register action
const registerAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: UserConstants.USER_REGISTER_REQUEST });
    const response = await UserAPI.registerService(datas);
    dispatch({ type: UserConstants.USER_REGISTER_SUCCESS, payload: response });
    dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, UserConstants.USER_REGISTER_FAIL);
  }
};

// Logout action
const logoutAction = () => (dispatch) => {
  UserAPI.logoutService();
  dispatch({ type: UserConstants.USER_LOGOUT });
  dispatch({ type: UserConstants.USER_LOGIN_RESET });
  dispatch({ type: UserConstants.USER_REGISTER_RESET });
};

export { loginAction, registerAction, logoutAction };
