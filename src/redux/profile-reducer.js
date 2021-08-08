import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const LIKES_COUNTER = "LIKES-COUNTER";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE-PROFILE-STATUS';

let initialState = {
  postData: [
    { id: 1, message: "Hi! How are you?", likes: 15 },
    { id: 2, message: "Soul is a wonderful cartoon", likes: 5 },
    { id: 3, message: "Happy Christmas Eve, guys!", likes: 20 },
  ],
  profile: null,
  status: null
};

const profileReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case LIKES_COUNTER: 
      newState.postData[action.id - 1].likes += 1;
      return newState;
    
    case ADD_POST: {
      if (!action.postText) {
        alert("Cannot add empty post, write something ;)");
        return state;
      } else {
        let newPost = {
          id: state.postData.length + 1,
          message: action.postText,
          likes: 0,
        };
        newState.postData.push(newPost);
        newState.postTxtState = "";
        return newState;
      }

    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile }
    }
    case SET_PROFILE_STATUS: {
      return {...state, status: action.status }
    }
    case UPDATE_PROFILE_STATUS: {
      return {...state, status: action.status }
    }
    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });


export const likesCounter = (id) => ({
  type: LIKES_COUNTER,
  id
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
  profile
  });

export const setProfileStatus = (status) => ({
  type: SET_PROFILE_STATUS,
  status
});




export const getUserProfile = (userId) =>{
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data =>
          dispatch(setUserProfile(data)))

  }
}

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then(data =>
          dispatch(setProfileStatus(data))

    )
  }
}

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then(response => {
      response.data.resultCode === 0 && dispatch(setProfileStatus(status));
    })
  }
    }

export default profileReducer;
