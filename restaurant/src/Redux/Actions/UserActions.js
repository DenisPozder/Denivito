import * as UserConstants from "../Constants/UserConstants";
import * as UserAPI from "../APIs/UserServices";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";

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

// User update action
const updateProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: UserConstants.USER_UPDATE_PROFILE_REQUEST });
    const response = await UserAPI.updateProfileService(
      user,
      tokenProtection(getState)
    );
    dispatch({
      type: UserConstants.USER_UPDATE_PROFILE_SUCCESS,
      payload: response,
    });
    toast.success("Profile Updated");
    dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, UserConstants.USER_UPDATE_PROFILE_FAIL);
  }
};

// Delete profile action
const deleteProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: UserConstants.USER_DELETE_PROFILE_REQUEST });
    await UserAPI.deleteProfileService(tokenProtection(getState));
    dispatch({ type: UserConstants.USER_DELETE_PROFILE_SUCCESS });
    toast.success("Profile Deleted");
    dispatch(logoutAction());
  } catch (error) {
    ErrorsAction(error, dispatch, UserConstants.USER_DELETE_PROFILE_FAIL);
  }
};

export {
  loginAction,
  registerAction,
  logoutAction,
  updateProfileAction,
  deleteProfileAction,
};
