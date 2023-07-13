import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../types/types";
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
   ] as Array<PostType>,
   profile: null as ProfileType | null,
   status: '',
   newPostText: ''
};
export type InitialStateType = typeof initialState

const profilePageReducer = (state = initialState, action: any): InitialStateType => {
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
            profile: { ...state.profile, photos: action.photos } as ProfileType
            //Нельзя в коде ставить тип
         };
      }
      default: {
         return state;
      }
   }
};


type AddPostActionType = {
   type: typeof ADD_POST
   newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })//return не нужен, он вместо ()


type DeletePostActionType = {
   type: typeof DELETE_POST
   postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });


type SetUserProfileActionType = {
   type: typeof SET_USER_PROFILE
   profile: object
}
export const setUserProfile = (profile: object): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });


type SetStatusActionType = {
   type: typeof SET_STATUS
   status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });


type SavePhotoSuccessActionType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photos: PhotosType
}
export const savePhotoSuccess = (photos: any): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });




export const getStatus = (userId: number) => async (dispatch: any) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
}


export const updateStatus = (status: string) => async (dispatch: any) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
   let response = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
};

export const savePhoto = (file: any) => async (dispatch: any) => {
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
}
export const saveProfile = (profile: object) => async (dispatch: any, getState: any) => {
   const userId = getState().authReducer.userId;
   const response = await profileAPI.saveProfile(profile);

   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
   } else {
      dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0]);
   }
}

export default profilePageReducer;