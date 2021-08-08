import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users
};

export const getFollowingUsers = createSelector(getUsers, (users) => {
  return users.filter(user =>user.followed === true )
})

export const getPageNumberUsers = (state) => {
  return state.usersPage.pageNumberUsers
};

export const getTotalNumberUsers = (state) => {
  return state.usersPage.totalNumberUsers
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
};

export const getDefaultUserImg = (state) => {
  return state.usersPage.defaultUserImg
};

export const getIsFollowingProgress = (state) => {
  return state.usersPage.isFollowingProgress
};