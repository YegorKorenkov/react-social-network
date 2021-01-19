import React from 'react';
import MyPosts from './MyPosts'
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer'
import { connect } from 'react-redux';


let mapStateToProps = state => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: text => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
    
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;