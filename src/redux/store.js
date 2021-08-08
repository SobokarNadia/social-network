import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _callSubscriber() {
    console.log("no subscriber (observer)");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi! How are you?", likes: 15 },
        { id: 2, message: "Soul is a wonderful cartoon", likes: 5 },
        { id: 3, message: "Happy Christmas Eve, guys!", likes: 20 },
      ],
      postTxtState: "",
    },
    dialogsPage: {
      dialogsData: [
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
      messagesData: [
        { id: 1, message: "Hello", className: "incoming" },
        { id: 2, message: "Hi", className: "outgoing" },
        { id: 3, message: "Yo", className: "incoming" },
        { id: 4, message: "Merhaba", className: "outgoing" },
        { id: 5, message: "Bonjour", className: "incoming" },
        { id: 6, message: "Hola", className: "outgoing" },
      ],
      messageState: "",
    },
    sidebar: {
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
    },
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber(this);
  },
};


window.store = store;

export default store;
