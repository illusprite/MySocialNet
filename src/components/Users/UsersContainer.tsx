import React from "react";
import { connect } from "react-redux";
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../redux/usersPage-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsers } from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
   users: Array<UserType>
   pageSize: number
   totalItemsCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
}
type MapDispatchPropsType = {
   follow: (id: number) => void
   unfollow: (id: number) => void
   requestUsers: (pageNumber: number, pageSize: number) => void
}
      
type OwnPropsType = {
      pageTitle: string
   }
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

   componentDidMount() {
      const { currentPage, pageSize } = this.props;
      this.props.requestUsers(currentPage, pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      const {pageSize} = this.props;
      this.props.requestUsers(pageNumber, pageSize)
   }

   render() {
      return <>
         <h2>{this.props.pageTitle}</h2>
         {this.props.isFetching ?
            <Preloader />
            : null}
         <Users
            totalItemsCount={this.props.totalItemsCount}
            //setUsersTotalCount={this.props.setUsersTotalCount}
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalItemsCount: getTotalItemsCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}
export default compose(
   // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState

   connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
      mapStateToProps, {
      follow,
      unfollow,
      requestUsers
   })
)(UsersContainer)

