import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';

function Post(props) {

  function addPoints(postId) {
    const { dispatch } = props;
    const action = {
      type: c.LIKE_POST,
      id: postId,
    }
    dispatch(action);
  }

  return(
    <div>
      <h5>{props.author}</h5>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
      <p>Likes: {props.points}</p>
      <button onClick={() => {addPoints(props.post.id)}}>Like</button>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  points: PropTypes.number,
  post: PropTypes.object
};

export default connect()(Post);
