import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments() {
    return (
      <ul>
        {this.props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='row'>
        <p><strong>List of comments:</strong></p>
        {this.props.comments.length ?
          this.renderComments() : (
            <p>No comments available!</p>
          )}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList)
