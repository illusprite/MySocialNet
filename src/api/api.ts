import axios from "axios";
import { ProfileType, UserType } from "../types/types";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "5fc34f85-abcb-4998-a251-bceda47a578b"
   }
});

type UsersGetType = {
   items: Array<UserType>
   totalCount: number
   error: string
}
export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get<UsersGetType>(`users?page=${currentPage}&count=${pageSize = 30}`).then(response => response.data);
   },

   follow(id: number) {
      return instance.post<LoginType>(`follow/${id}`);
   },

   unfollow(id: number) {
      return instance.delete<LoginType>(`follow/${id}`);
   },
   getProfile(userId: number) {
      console.warn('Obsolete method. Please use profileAPI object.')
      return profileAPI.getProfile(userId);
   }
}


export const profileAPI = {
   getProfile(userId: number) {
      return instance.get<ProfileType>(`profile/` + userId);
   },
   getStatus(userId: number) {
      return instance.get<string>(`profile/status/` + userId);
   },
   updateStatus(status: string) {
      return instance.put<LoginType>(`profile/status/`, { status: status });
   },
   savePhoto(photoFile: any) {
      const formData = new FormData();
      formData.append("image", photoFile);
      return instance.put(`profile/photo/`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   },
   saveProfile(profile: ProfileType) {
      return instance.put(`profile`, profile);
   }

}

export enum ResultCodesEnum {
   Success = 0,
   Error = 1
}
export enum ResultCodeForCaptcha {
   CapthaIsRequired = 10
}

type MeResponseType = {
   data: {
      id: number
      email: string
      login: string
   }
   resultCode: ResultCodesEnum
   messages: Array<string>
}
type LoginType = {
   resultCode: ResultCodesEnum | ResultCodeForCaptcha
   messages: Array<string>
   data: {
      userId?: number
   }
}
export const authAPI = {
   me() {
      return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
   },
   login(email: null | string, password: null | string, rememberMe = false, captcha: null | string = null) {
      return instance.post<LoginType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
   },
   logout() {
      return instance.delete<LoginType>(`auth/login`)
   }
}

type CaptchaUrl= {
   url: string
}
export const securityAPI = {
   getCaptchaUrl() {
      return instance.get<CaptchaUrl>(`security/get-captcha-url`).then(res => res.data);
   }
}