import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/usersPage-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return <>
         {this.props.isFetching ?
            <Preloader />
            : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            setUsersTotalCount={this.props.setUsersTotalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress} />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPageReducer.users,
      pageSize: state.usersPageReducer.pageSize,
      totalUsersCount: state.usersPageReducer.totalUsersCount,
      currentPage: state.usersPageReducer.currentPage,
      isFetching: state.usersPageReducer.isFetching,
      followingInProgress: state.usersPageReducer.followingInProgress
   }
}
export default connect(mapStateToProps, { follow, 
   unfollow, 
   setCurrentPage, 
   toggleFollowingProgress,
   getUsers })(UsersContainer);
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
