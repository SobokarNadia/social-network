import { authProfile } from "./auth-reducer";

const SET_INITIALISING = 'SET-INITIALISING';

let initialState = {
  initialised: false
}

const appReducer = (state=initialState, action) => {
  switch (action.type){
    case SET_INITIALISING:
      return {...state,
      initialised: true}
    default:
      return state
  }
}

export const initialisedSuccess = () => ({type: SET_INITIALISING});

export const initialisedApp = () => {
  return (dispatch) => {
    let promise = dispatch(authProfile());
    promise.then(() => 
    dispatch(initialisedSuccess())
    )
  }
}

export default appReducer;