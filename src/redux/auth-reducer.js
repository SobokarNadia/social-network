import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA = 'SET-CAPTCHA';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
    errorMeassage: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
         ...action.data,
      };
      case  SET_CAPTCHA:
          return {
              ...state,
              captchaUrl: action.url
          };
      case SET_ERROR_MESSAGE:
          return {
              ...state,
              errorMeassages: action.messages
          }
    default:
      return state;
  }
};

export const setUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
  };
};
export const setCaptcha = (url) => ({
        type: SET_CAPTCHA,
        url
});

export const setErrorMessage = (messages) => ({
    type: SET_ERROR_MESSAGE,
    messages
});

export const authProfile = () => {
  return (dispatch) => {
    return authAPI.authMe()
        .then((data) => {
          if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
          }else{
              dispatch(setUserData(null, null, null, false));
          }
        });
  }
}

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
      authAPI.login(email, password, rememberMe, captcha)
          .then(data => {
              console.log('loginResponse', data);
              if(data.resultCode === 0) {
                  dispatch(authProfile(true));
              }else if (data.resultCode === 1){
                  dispatch(setErrorMessage(data.messages));
              }else if (data.resultCode === 10){
                  authAPI.getCaptcha().then(data => {
                    dispatch(setCaptcha(data.url));
                  })
                  dispatch(setErrorMessage(data.messages));
              }
          })
  }
}

export const logout = () => {
    return (dispatch) => {
    authAPI.logout()
        .then(data => {
            console.log('loginResponse', data);
            if (data.resultCode === 0) {
                dispatch(authProfile());
            } else {
                data.messages.map(el => alert(el))
            }
        })
}
}



export default authReducer;
