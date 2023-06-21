import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'profilePage-reducer/ADD-POST';
const DELETE_POST = 'profilePage-reducer/DELETE_POST';
const SET_USER_PROFILE = 'profilePage-reducer/SET_USER_PROFILE';
const SET_STATUS = 'profilePage-reducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profilePage-reducer/SAVE_PHOTO_SUCCESS';
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
      case DELETE_POST: {
         return {
            ...state,
            postsData: state.postsData.filter(p => p.id != action.postId)
         }
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
      case SAVE_PHOTO_SUCCESS: {
         return {
            ...state,
            profile: {...state.profile, photos: action.photos}
         };
      }
      default: {
         return state;
      }
   }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })//return не нужен, он вместо ()
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
}

export const getUserProfile = (userId) => async (dispatch) => {
   let response = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
};

export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
   if(response.data.resultCode === 0){
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
}

export default profilePageReducer;