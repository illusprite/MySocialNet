import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'usersPAge-reducer/FOLLOW';
const UNFOLLOW = 'usersPAge-reducer/UNFOLLOW';
const SET_USERS = 'usersPAge-reducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersPAge-reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPAge-reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersPAge-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPAge-reducer/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [] as Array<UserType>,
   pageSize: 30,
   totalItemsCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number> //array of users id
};

type InitialStateType = typeof initialState

const usersPageReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
         };
      };
      case UNFOLLOW: {
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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



type FollowSuccessActionType = {
   type: typeof FOLLOW
   userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });//return не нужен, он вместо ()
type UnfollowSuccessActionType = {
   type: typeof UNFOLLOW
   userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });
type SetUsersActionType = {
   type: typeof SET_USERS
   users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetUsersTotalCountActionType = {
   type: typeof SET_TOTAL_USERS_COUNT
   totalItemsCount: number
}
export const setUsersTotalCount = (totalItemsCount: number): SetUsersTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalItemsCount });
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
type ToggleFollowingProgressActionType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



const followUnfollowFlow = async (dispatch: any, apiMethod: any, AC: any, id: number) => {
   dispatch(toggleFollowingProgress(true, id));
   let response = await apiMethod(id);
   if (response.data.resultCode === 0) {
      dispatch(AC(id));
   }
   dispatch(toggleFollowingProgress(false, id));
}
export const follow = (id: number) => async (dispatch: any) => {
   followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followSuccess, id);
};
export const unfollow = (id: number) => async (dispatch: any) => {
   followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, id);
};

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
   dispatch(toggleIsFetching(true));
   dispatch(setCurrentPage(currentPage));
   let data = await usersAPI.getUsers(currentPage, pageSize);
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setUsersTotalCount(data.totalCount));
}


export default usersPageReducer;