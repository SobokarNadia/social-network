import React from 'react';
import cl from './MyPosts.module.scss';
import PostContainer from './Post/PostContainer';
import {Form, Field} from 'react-final-form';

const MyPosts = (props) => {
  let postElement = props.postData.map(post => <PostContainer id={post.id} key={post.id}/>);


  let onSubmit = (data) => {
    props.addPost(data.post);
  }
  return(
    <div className={cl.myPosts}>
      <div className={cl.header}>My Posts</div>
      <Form onSubmit={onSubmit}
            render={({handleSubmit, pristine, submitting}) => (<form onSubmit={handleSubmit}>
              <div>
                <Field name={'post'} placeholder={'Enter you post'} component={'textarea'} className={cl.textarea}/>
              </div>
              <div>
                <button  type='submit' className={cl.button } disabled={pristine || submitting}>Send</button>
              </div>
            </form>)}
      />
      {postElement}
    </div>
  )
}

export default MyPosts;