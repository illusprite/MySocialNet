import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
   postsData: [
      { id: 1, message: 'Hi!', likesCount: 14 },
      { id: 2, message: "Helooooo! It's my first post", likesCount: 23 },
      { id: 3, message: 'FowFowFow', likesCount: 13 },
      { id: 4, message: 'How are you?', likesCount: 233 },
      { id: 5, message: 'Purple season', likesCount: 27 },
      { id: 6, message: 'bless', likesCount: 22 },
      { id: 7, message: 'SadBoy99', likesCount: 90 },
   ],
   newPostText: 'aaaaaaaaa',
   profile: null,
   status: ""
};

const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 8,
            message: action.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         };
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         };
      }
      default: {
         return state;
      }
   }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })//return не нужен, он вместо ()
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId).then(response => {
         dispatch(setStatus(response.data));
      })
   }
}
export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
         }
      })
   }
}
export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data));
      });
   }
}

export default profilePageReducer;