import React from 'react';
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = props => {
    let postsElements = props.posts.map((p, key) => 
        <Post key={key} message={p.message} likeCount={p.likeCount} />
    )


    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (text) => {
        props.updateNewPostText(text)
    }
   

    return (
        <div className="posts_wrapper">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={e => onPostChange(e.target.value)} value={props.newPostText} />
                </div>
                    <button onClick={addPost}>Add post</button>
            </div> 
            <div className="posts">
                New post
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;