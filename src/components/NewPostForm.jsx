import React from 'react';
import c from './../constants';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

class NewPostForm extends React.Component {

  constructor(props) {
    super(props);
    this.handlePostSubmission = this.handlePostSubmission.bind(this);
  }

  handlePostSubmission(event) {
    event.preventDefault();
    const { _author, _content } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_POST,
      id: v4(),
      author: _author.value,
      content: _content.value,
      timestamp: new Date().toLocaleTimeString(),
      points: 0,
    }
    dispatch(action);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handlePostSubmission}>
          <input id='author' ref='_author' placeholder='Author Name'/>
          <textarea id='content' ref='_content' placeholder='Write post here...'/>
          <button type='submit'>Post!</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewPostForm);
