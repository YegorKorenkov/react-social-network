const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Michael'
        },
        {
            id: 2,
            name: 'John'
        },
        {
            id: 3,
            name: 'Andrew'
        }
        ],
    
    messagesData: [
        {message: "Hi!"},
        {message: "How are you?"},
        {message: "It's a good weather today!"}
    ],
          
    newMessageText: ''
}


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newMessageText = action.newMessage;
            // return stateCopy;
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        case SEND_MESSAGE: {
            let message = state.newMessageText
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            
            stateCopy.messagesData.push({ id: 6, message: message})
            stateCopy.newMessageText = ""
            return stateCopy;
        }  
        default: return state;
    }
}

export default messagesReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (message) => {
    return {
        type: NEW_MESSAGE_TEXT, newMessage: message
    }
}