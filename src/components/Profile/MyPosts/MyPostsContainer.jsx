import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


/*function MyPostsContainer(props){
   debugger
   let state = props.store.getState();

   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }
   debugger
   return <MyPosts updateNewPostText={onPostChange} 
      addPost={addPost} 
      postsData={state.profilePageReducer.postsData}
      newPostText={state.profilePageReducer.newPostText}/>
   
}*/
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