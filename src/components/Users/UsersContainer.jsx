import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersPage-reducer";

let mapStateToProps = (state) => {
   return {
      users: state.usersPageReducer.users
   }         
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      }
   }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;