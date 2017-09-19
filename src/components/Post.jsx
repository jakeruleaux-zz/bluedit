import React from 'react';
import PropTypes from "prop-types";

function Post(props) {


  return(
    <div>
      <h5>{props.author}</h5>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Post;
