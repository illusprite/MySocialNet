import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import { Field, reduxForm } from 'redux-form';

let AddNewPostForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field cols="50" rows="4" name="newPostText" component="textarea" />
      </div>
      <div>
         <button>Add post</button>
      </div>
   </form >
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

function MyPosts(props) {
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
}

export default MyPosts;