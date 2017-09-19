import React from 'react';
import Post from './Post';

function PostList() {
  return(
    <div>
      {props.postList.map((post) =>
      <Post author={post.author}
        content={post.content}
        timestamp={post.timestamp}
        key={post.id}/>
      )}
    </div>
  )
}

export default PostList;
