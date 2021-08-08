import React from 'react';
import cl from './Post.module.scss';
import like from '../../../../assets/images/like.svg'

const Post = (props) => {
  let likesCounter = () => {
    props.likesCounter(props.id);
  }
  let date = new Date();
  return(
    <div className={cl.post}>
       <div className={cl.post_header} >
        <img className={cl.photo} src={props.profile === undefined ? props.profile.photos.small : props.defaultUserImg}/>
        <div className={cl.info} >
            <div className={cl.name}>{props.profile === undefined ? props.profile.fullName : 'User Name'}</div>
            <div className={cl.date}>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</div>
        </div>
       </div>
        <div className={cl.post_content} >
            {props.message}
        </div>
        <div className={cl.like}><img src={like} className={cl.likeButton} onClick={likesCounter}/>{props.likes}</div>
    </div>
  )
};

export default Post;