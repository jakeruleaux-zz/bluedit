import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  console.log(props.postList);

  return(
    <div>
      {props.postList.map((post) =>
      <Post author={post.author}
        content={post.content}
        timestamp={post.timestamp}
        points={post.points}
        post={post}
        postList={props.postList}
        key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
