const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      name: "Alisa",
      id: 1,
      img:null 
    },
    {
      name: "Kira",
      id: 2,
      img: null,
    },
    {
      name: "Sasha",
      id: 3,
      img:null
    },
    {
      name: "Fedia",
      id: 4,
      img:null
    },
    {
      name: "Nastia",
      id: 5,
      img:null
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
  messageState: "Enter your text",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!action.message) {
        alert("Cannot send empty message!");
        return state;
      } else {
        let newMessage = {
          id: state.messagesData.length + 1,
          message: action.message,
          className: "outgoing",
        };
        return { 
          ...state,
          messagesData: [...state.messagesData, newMessage],
          messageState: ''
        };
      }

    default:
      return state;
  }
};

export const sendMessage = (message) => ({ type: ADD_MESSAGE, message });


export default dialogReducer;
