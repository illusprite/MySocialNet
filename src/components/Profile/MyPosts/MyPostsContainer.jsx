import { addPost } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePageReducer.postsData,
      newPostText: state.profilePageReducer.newPostText
   }
}
const MyPostsContainer = connect(mapStateToProps, { addPost})(MyPosts);
export default MyPostsContainer;