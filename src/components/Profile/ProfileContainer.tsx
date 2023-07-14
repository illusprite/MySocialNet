import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profilePage-reducer';
import {
   useLocation,
   useNavigate,
   useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
   profile: ProfileType
   status: string
   authorizedUserId: number
   isAuth: boolean
}
type MapDispatchPropsType = {
   getUserProfile: (userId: number) => void
   getStatus: (userId: number) => void
   updateStatus: (status: string) => void
   savePhoto: (file: any) => void
   saveProfile: (profile: object) => void
}

type RouterType = {
   location: any
   navigate: any
   params: any
}
type OwnPropsType = {
   pageTitle: string
   router: RouterType
   history: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType>{
   refreshProfile() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }
   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps: PropsType) {
      if (this.props.router.params.userId != prevProps.router.params.userId) {
         this.refreshProfile();
      }
   }
   //Разберись, почему мы дописываем router.params.
   //

   render() {
      return <Profile {...this.props}
         savePhoto={this.props.savePhoto}
         isOwner={!this.props.router.params.userId}
         profile={this.props.profile}
         status={this.props.status}
         updateStatus={this.props.updateStatus} />
   }
}

let mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePageReducer.profile,
   status: state.profilePageReducer.status,
   authorizedUserId: state.authReducer.userId,
   isAuth: state.authReducer.isAuth
})

function withRouter(Component: React.ComponentClass<PropsType>) {
   function ComponentWithRouterProp(props: PropsType) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

export default compose(
   // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
   connect/* <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType> */(
      mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
      savePhoto,
      saveProfile
   }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);