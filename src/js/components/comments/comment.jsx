import React from 'react';

const Comment = props => (
    <div id='comment'>
        <div id='comment-head'>
            <h4 id='comment-author'>
                {/* props.comment.author_name */}
                Commenter's Name
            </h4>
        </div>

        <p id='comment-body'>
            {/* props.comment.body */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
);

export default Comment;
