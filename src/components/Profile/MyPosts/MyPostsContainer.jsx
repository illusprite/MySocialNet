import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePageReducer.postsData,
      newPostText: state.profilePageReducer.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;