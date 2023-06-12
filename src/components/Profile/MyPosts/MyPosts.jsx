import React, {memo} from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let AddNewPostForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field cols="50" rows="4" name="newPostText" 
         placeholder="Enter your post" component={Textarea}
         validate={[required, maxLengthCreator(10)]} />
      </div>
      <div>
         <button>Add post</button>
      </div>
   </form >
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = memo((props) => {
   console.log("RENDER!!!");
   
   let postsElements = props.postsData
      .map(p => <MyPost message={p.message} key={p.id} likesCount={p.likesCount} />);
   let newPostElement = React.createRef();

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   };
   return <div className={s.posts}>
      <div className={s.posts__title}>
         My posts
         <AddNewPostReduxForm onSubmit={onAddPost} />
      </div>

      {postsElements}
   </div>
}); 

export default MyPosts;