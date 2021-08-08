import userImg from '../assets/images/userImg.svg';
import userImg1 from '../assets/images/userImg1.svg';
import userImg2 from '../assets/images/userImg2.svg';
import userImg3 from '../assets/images/userImg3.svg';
import userImg4 from '../assets/images/userImg4.svg';
import userImg5 from '../assets/images/userImg5.svg';
import userImg6 from '../assets/images/userImg6.svg';
import {usersApi} from "../api/api";

const FOLLOW_TOGGLE_SUCCES = "FOLLOW-TOGGLE-SUCCES";
const SET_USERS = "SET-USERS";
const CURRENT_PAGE = "CURRENT-PAGE";
const TOTAL_USERS_NUMBER = "TOTAL-USERS-NUMBER";
const IS_FETCHING_TOGGLE = "IS-FETCHING-TOGGLE";
const IS_FOLLOWING_PROGRESS_TOGGLE = "IS-FOLLOWING-PROGRESS-TOGGLE";

let initialState = {
  users: [],
  // defaultUserImg: [userImg, userImg1, userImg2, userImg3, userImg4, userImg5, userImg6],
  defaultUserImg: userImg,
  pageNumberUsers: 100,
  totalNumberUsers: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE_SUCCES:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: user.followed ? false : true };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case TOTAL_USERS_NUMBER: 
      return {
        ...state,
        totalNumberUsers: action.number
      }
    case IS_FETCHING_TOGGLE:
      return{
        ...state,
        isFetching: action.isFetching
      }
    case IS_FOLLOWING_PROGRESS_TOGGLE:
      return{
        ...state,
        isFollowingProgress: action.isFetching ? [...state.isFollowingProgress, action.id]:
        state.isFollowingProgress.filter(id => id !== action.id)
      }
    default:
      return state;
  }
};

export const followToggleSucces = (id) => ({ type: FOLLOW_TOGGLE_SUCCES, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => {
  return {
    type: CURRENT_PAGE,
        pageNumber,
  }
};
export const totalUsersNumber = (number) => ({
  type: TOTAL_USERS_NUMBER,
  number,
});
export const isFetchingToggle = (isFetching) => ({
  type: IS_FETCHING_TOGGLE,
  isFetching,
});
export const isFollowingProgressToggle = (isFetching, id) => ({
  type: IS_FOLLOWING_PROGRESS_TOGGLE,
  isFetching,
  id,
});


export const requestUsers = (pageNumberUsers, currentPage) => {
  return (dispatch) => {
    dispatch(isFetchingToggle(true));
    dispatch(setCurrentPage(currentPage));
    usersApi.getUsers(pageNumberUsers, currentPage).then((data) => {
      dispatch(isFetchingToggle(false));
      dispatch(setUsers(data.items));
      dispatch(totalUsersNumber(data.totalCount));
    });
  }
}
export const followToggle = (userId, followed) => {
  return (dispatch) => {
    dispatch(isFollowingProgressToggle(true, userId));
    if (!followed){
      usersApi.follow(userId)
          .then(data => {
            (data.resultCode === 0) && dispatch(followToggleSucces(userId));
            dispatch(isFollowingProgressToggle(false,userId));
          })
    }else{
      dispatch(isFollowingProgressToggle(true, userId));
      usersApi.unfollow(userId).then(data => {
        (data.resultCode === 0) && dispatch(followToggleSucces(userId));
        dispatch(isFollowingProgressToggle(false,userId));
      })
    }
  }
};


export default usersReducer;
