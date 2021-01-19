import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
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
          
    newPostText: 'it-kamasutra',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.newPostText = {...state.newPostText}
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
            
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
            
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default: return state;
    }
}

export default profileReducer;

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const setUserProfile = profile => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {  
    dispatch(setUserProfile(response.data))   
    })
}
