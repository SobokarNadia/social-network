import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return(
      <div className={cl.content}>
        <ProfileInfo {...props}/>
        <MyPostsContainer />
      </div>
  )
}

export default Profile;