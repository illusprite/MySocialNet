import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'usersPAge-reducer/FOLLOW';
const UNFOLLOW = 'usersPAge-reducer/UNFOLLOW';
const SET_USERS = 'usersPAge-reducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersPAge-reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPAge-reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersPAge-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPAge-reducer/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 10,
   totalItemsCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
         };
      };
      case UNFOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
         };
      };
      case SET_USERS: {
         return {
            ...state,
            users: [...action.users]
         };
      };
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         };
      };
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalItemsCount: action.totalItemsCount
         };
      };
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         };
      };
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         };
      }
      default: {
         return state;
      };
   };
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId });//return не нужен, он вместо ()
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalItemsCount) => ({ type: SET_TOTAL_USERS_COUNT, totalItemsCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

const followUnfollowFlow = async (dispatch, apiMethod, AC, id) => {
   dispatch(toggleFollowingProgress(true, id));
   let response = await apiMethod(id);
   if (response.data.resultCode === 0) {
      dispatch(AC(id));
   }
   dispatch(toggleFollowingProgress(false, id));
}
export const follow = (id) => async (dispatch) => {
   followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followSuccess, id);
};
export const unfollow = (id) => async (dispatch) => {
   followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, id);
};

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   dispatch(setCurrentPage(currentPage));
   let data = await usersAPI.getUsers(currentPage, pageSize);
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setUsersTotalCount(data.totalCount));
}


export default usersPageReducer;