import { createSelector } from "reselect"
import { AppStateType } from "./redux-store";

export const getUsersSelector = (state: AppStateType) => {
   return state.usersPageReducer.users
}
export const getUsers = createSelector( getUsersSelector, (users)=> {
   return users.filter(u => true)
});
export const getPageSize = (state: AppStateType) => {
   return state.usersPageReducer.pageSize
}
export const getTotalItemsCount = (state: AppStateType) => {
   return state.usersPageReducer.totalItemsCount
}
export const getCurrentPage = (state: AppStateType) => {
   return state.usersPageReducer.currentPage
}
export const getIsFetching = (state: AppStateType) => {
   return state.usersPageReducer.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
   return state.usersPageReducer.followingInProgress
}

/* users: state.usersPageReducer.users,
      pageSize: state.usersPageReducer.pageSize,
      totalUsersCount: state.usersPageReducer.totalUsersCount,
      currentPage: state.usersPageReducer.currentPage,
      isFetching: state.usersPageReducer.isFetching,
followingInProgress: state.usersPageReducer.followingInProgress
       */