import { addPost } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const MyPostsContainer = (props) => {
   return <MyPosts ava={props.ava} postsData={props.postsData} newPostText={props.newPostText} addPost={props.addPost}/>
}

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePageReducer.postsData,
      newPostText: state.profilePageReducer.newPostText
   }
}
export default connect(mapStateToProps, { addPost })(MyPostsContainer);