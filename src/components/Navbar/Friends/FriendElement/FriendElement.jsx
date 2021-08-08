import React from 'react';
import cl from '../Friends.module.scss'

const FriendElement = (props) => {
  return(
    <div className={cl.friend}>
      <img src={props.img} alt="" className={cl.img}/>
      <div>{props.name}</div>
    </div>
  )
}

export default FriendElement;