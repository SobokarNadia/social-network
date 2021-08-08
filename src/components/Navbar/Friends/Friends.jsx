import React from "react";
import FriendElement from "./FriendElement/FriendElement";
import cl from "./Friends.module.scss";

const Friends = (props) => {
  let friendElement = props.friendsData.map((friend) => {
    if (friend.id < 4)
      return <FriendElement name={friend.name} img={friend.img} key={friend.id} />;
  }); 

  return (
    <div className={cl.frienedsBlock}>
      <div className={cl.title}>Friends</div>
      <div className={cl.friends}>{friendElement}</div>
    </div>
  );
};

export default Friends;
