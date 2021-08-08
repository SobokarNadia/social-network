import profileIcon from "../assets/images/profileIcon.svg";
import dialogsIcon from "../assets/images/dialogsIcon.svg";
import usersIcon from "../assets/images/usersIcon.svg";
import newsIcon from "../assets/images/newsIcon.svg";
import musicIcon from "../assets/images/musicIcon.svg";
import settingsIcon from "../assets/images/settingsIcon.svg";
import profileSelectedIcon from "../assets/images/profileSelectedIcon.png";
import dialogsSelectedIcon from "../assets/images/dialogsSelectedIcon.svg";
import usersSelectedIcon from "../assets/images/usersSelectedIcon.svg";
import newsSelectedIcon from "../assets/images/newsSelectedIcon.png";
import musicSelectedIcon from "../assets/images/musicSelectedIcon.svg";
import settingsSelectedIcon from "../assets/images/settingsSelectedIcon.svg";


let initialState = {
  friendsData: [
    {
      name: "Alisa",
      id: 1,
      img:
        "https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png",
    },
    {
      name: "Kira",
      id: 2,
      img:
        "https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart-thumbnail.jpg",
    },
    {
      name: "Sasha",
      id: 3,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png",
    },
    {
      name: "Fedia",
      id: 4,
      img:
        "https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png",
    },
    {
      name: "Nastia",
      id: 5,
      img:
        "https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart-thumbnail.jpg",
    },
    {
      name: "Samira",
      id: 6,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png",
    },
    {
      name: "Inna",
      id: 7,
      img:
        "https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png",
    },
  ],
  sidebarElements: [
    { id: 1, name: "Profile",selectedIconPath: profileSelectedIcon, iconPath: profileIcon},
    { id: 2, name: "Dialogs",selectedIconPath: dialogsSelectedIcon, iconPath: dialogsIcon},
    { id: 3, name: "Users", selectedIconPath: usersSelectedIcon, iconPath:usersIcon},
    { id: 4, name: "News",selectedIconPath: newsSelectedIcon, iconPath: newsIcon},
    { id: 5, name: "Music",selectedIconPath: musicSelectedIcon, iconPath: musicIcon},
    { id: 6, name: "Settings",selectedIconPath: settingsSelectedIcon, iconPath: settingsIcon},
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    }
};


export default sidebarReducer;
