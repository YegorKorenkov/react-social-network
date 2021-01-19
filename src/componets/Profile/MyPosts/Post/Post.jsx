import React from 'react';
import './Post.css'

const Post = props => {
    
    return (
                <ul className="post_wrapper">
                    <li className="post">
                        <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="Avatar"/>
                        <span>{props.message}</span>
                        <div>{props.likeCount} Like</div>
                    </li>
                </ul>
    );
};

export default Post;