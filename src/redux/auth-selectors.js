export const getIsAuth = (state) => {
  return state.auth.isAuth
};

export const getLogin = (state) => {
  return state.auth.login
};

export const getCaptchaUrl = (state) => {
  return state.auth.captchaUrl
};

export const getErrorMeassages = (state) => {
  return state.auth.errorMeassages
};

export const getUserId = (state) => {
  return state.auth.userId
};