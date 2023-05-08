import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC,  setCurrentPageAC, setUsersTotalCountAC} from "../../redux/usersPage-reducer";

class UsersContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return <Users
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         users={this.props.users}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         onPageChanged={this.onPageChanged} />
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPageReducer.users,
      pageSize: state.usersPageReducer.pageSize,
      totalUsersCount: state.usersPageReducer.totalUsersCount,
      currentPage: state.usersPageReducer.currentPage
   }         
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);