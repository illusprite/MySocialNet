import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import Users from './Users';
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, toggleIsFetching } from "../../redux/usersPage-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return <>
         {this.props.isFetching ? 
         <Preloader/>
         : null}
         <Users
            totalUsersCount = {this.props.totalUsersCount}
            setUsersTotalCount={this.props.setUsersTotalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged} />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPageReducer.users,
      pageSize: state.usersPageReducer.pageSize,
      totalUsersCount: state.usersPageReducer.totalUsersCount,
      currentPage: state.usersPageReducer.currentPage,
      isFetching: state.usersPageReducer.isFetching
   }
}
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer);
/*let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(follow(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollow(userId));
      },
      setUsers: (users) => {
         dispatch(setUsers(users));
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPage(currentPage))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCount(totalCount))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetching(isFetching))
      }
   }
}*/
