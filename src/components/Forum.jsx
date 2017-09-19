import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';

class Forum extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   return(
      <div>
        <NewPostForm />
        <PostList
          postList = {this.props.masterPostList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterPostList : state
  }
}

export default connect(mapStateToProps)(Forum);
