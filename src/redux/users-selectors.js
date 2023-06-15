import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
   return state.usersPageReducer.users;
}
export const getUsers = createSelector( getUsersSelector, (users)=> {
   return users.filter(u => true);
});
export const getPageSize = (state) => {
   return state.usersPageReducer.pageSize;
}
export const getTotalItemsCount = (state) => {
   return state.usersPageReducer.totalItemsCount;
}
export const getCurrentPage = (state) => {
   return state.usersPageReducer.currentPage;
}
export const getIsFetching = (state) => {
   return state.usersPageReducer.isFetching;
}
export const getFollowingInProgress = (state) => {
   return state.usersPageReducer.followingInProgress;
}

/* users: state.usersPageReducer.users,
      pageSize: state.usersPageReducer.pageSize,
      totalUsersCount: state.usersPageReducer.totalUsersCount,
      currentPage: state.usersPageReducer.currentPage,
      isFetching: state.usersPageReducer.isFetching,
followingInProgress: state.usersPageReducer.followingInProgress
       */