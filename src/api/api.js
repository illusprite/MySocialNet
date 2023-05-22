import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "5fc34f85-abcb-4998-a251-bceda47a578b"
   }
});
export const usersAPI = {
   
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage = 1}&count=${pageSize = 10}`).then(response => response.data);
   },

   follow(id) {
      return instance.post(`follow/${id}`);
   },

   unfollow(id) {
      return instance.delete(`follow/${id}`);
   },
   getProfile(userId){
      return instance.get(`profile/` + userId);
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
}