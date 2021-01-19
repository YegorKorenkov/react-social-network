import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "It's my first post",
                    likeCount: "15"
                },
                {
                    id: 2,
                    message: "Hello guys!",
                    likeCount: "25"
                }
              ],
              
            newPostText: 'it-kamasutra'
        },
    
        messagesPage: {
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
        },
        
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

        
    },
    
    subscribe (observer) {
        this._callSubscriber = observer
    }
}





export default store;