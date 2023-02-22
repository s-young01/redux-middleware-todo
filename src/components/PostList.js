import React from 'react';

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map(po => <li key={po.id}>{po.title}</li>)}
        </div>
    );
};

export default PostList;