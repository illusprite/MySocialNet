import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
   return <div>
      {props.profile && <div>   
         <ProfileInfo profile={props.profile} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
         <MyPostsContainer ava={props.profile.photos.large} />
      </div>
      }
   </div>
}

export default Profile;