// Aksiyon tipleri
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";

// Aksiyon oluşturucuları
export const userSignUpRequest = (userData) => ({
  type: USER_SIGNUP_REQUEST,
  payload: userData
});

export const userSignUpSuccess = (user) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: user
});

export const userSignUpFailure = (error) => ({
  type: USER_SIGNUP_FAILURE,
  payload: error
});

export const userLoginRequest = (userData) => ({
  type: USER_LOGIN_REQUEST,
  payload: userData
});

export const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error
});

export const userLogout = () => ({
  type: USER_LOGOUT
});
