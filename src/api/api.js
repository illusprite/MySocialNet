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

   followUser(id, follow, toggleFollowingProgress) {
      instance.post(`follow/${id}`, {}).then(response => {
            if (response.data.resultCode === 0) {
               follow(id);
            }
            toggleFollowingProgress(false, id);
         });
   },

   unfollowUser(id, unfollow, toggleFollowingProgress) {
      return instance.delete(`follow/${id}`).then(response => {
         if (response.data.resultCode === 0) {
            unfollow(id);
         }
         toggleFollowingProgress(false, id);
      });
   }
}

export const auth = {
   authMe(setAuthUserData) {
      return instance.get(`auth/me`).then(response => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            setAuthUserData(id, email, login);
         }
      });
   },
}