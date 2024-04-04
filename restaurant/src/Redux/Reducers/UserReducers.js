import * as UserConstants from "../Constants/UserConstants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.USER_LOGIN_REQUEST:
      return { isLoading: true };
    case UserConstants.USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case UserConstants.USER_LOGIN_FAIL:
      return { isLoading: false, isError: action.payload };
    case UserConstants.USER_LOGIN_RESET:
      return {};
    case UserConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.USER_REGISTER_REQUEST:
      return { isLoading: true };
    case UserConstants.USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case UserConstants.USER_REGISTER_FAIL:
      return { isLoading: false, isError: action.payload };
    case UserConstants.USER_LOGIN_RESET:
      return {};
    default:
      return state;
  }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.USER_UPDATE_PROFILE_REQUEST:
      return { isLoading: true };
    case UserConstants.USER_UPDATE_PROFILE_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case UserConstants.USER_UPDATE_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case UserConstants.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

// DELETE PROFILE
export const userDeleteProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.USER_DELETE_PROFILE_REQUEST:
      return { isLoading: true };
    case UserConstants.USER_DELETE_PROFILE_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case UserConstants.USER_DELETE_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case UserConstants.USER_DELETE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
