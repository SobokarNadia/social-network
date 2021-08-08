import React from "react";
import cl from "./Users.module.scss";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesNumber = Math.ceil(props.totalNumberUsers / props.pageNumberUsers);

  let pages = [];


  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={cl.userPage}>
      <div className={cl.pages}>
        {pages.map((pageNumber) => (
          <span key={pageNumber}
            onClick={() => {
                props.setCurrentPage(pageNumber);
            }}
            className={
              props.currentPage === pageNumber
                ? `${cl.selectedPage} ${cl.pageNumber}`
                : cl.pageNumber
            }
          >
            {pageNumber}
          </span>
        ))}
      </div>
      {props.users.map((user) => {
          let randomNumber = Math.floor(Math.random() * props.defaultUserImg.length);
          return(
          <div className={cl.userElement} key={user.id}>
          <div className={cl.head}>
          <NavLink to={`/profile/${user.id}`}>
          <img
          src={
          !user.photos.small
          ? props.defaultUserImg[randomNumber]
          : user.photos.small
      }
          alt="userIcon"
          className={cl.img}
          />
          </NavLink>
          <button
          className={cl.button}
          disabled={props.isFollowingProgress.some(id => id===user.id )}
          onClick={() =>  {
          props.followToggle(user.id, user.followed)
      }}
          >
      {user.followed ? "UNFOLLOW" : "FOLLOW"}
          </button>
          </div>
          <div className={cl.description}>
          <NavLink to={`/profile/${user.id}`} className={cl.link}>
      {user.name}
          </NavLink>
          <div >{user.status}</div>
          </div>
          </div>
          )})}
    </div>
  );
};

export default Users;
