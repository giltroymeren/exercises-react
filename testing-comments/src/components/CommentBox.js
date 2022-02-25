import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, saveComment } from '../actions';
import requireAuth from '../utils/requireAuth';

class CommentBox extends React.Component {
  state = { comment: '' }

  onChangeHandler = (event) => {
    this.setState({ comment: event.target.value })
  }

  onResetHandler = () => {
    this.setState({ comment: '' })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.onSubmitHandler}>
          <div className='row'>
            <label htmlFor='form-comment'>What do you think?</label>
            <textarea className='u-full-width'
              id='form-comment'
              name='form-comment'
              value={this.state.comment}
              onChange={this.onChangeHandler}
              placeholder='Enter your thoughts here...'></textarea>
          </div>

          <div className='row'>
            <div className='one-half column'>
              <button className="u-full-width"
                id='form-btn-reset'
                type="reset"
                onClick={this.onResetHandler}>
                Clear
              </button>
            </div>

            <div className='one-half column'>
              <button className="button-primary u-full-width"
                id='form-btn-submit'
                type="submit">
                Comment
              </button>
            </div>
          </div>
        </form>

        <button className="button-primary u-full-width"
          id='form-btn-fetch'
          onClick={this.props.fetchComments}>
          Load More Comments
        </button>
      </div>
    )

    // return <p>You must login first before posting a comment.</p>
  }
};

export default connect(
  null,
  {
    saveComment,
    fetchComments
  }
)(requireAuth(CommentBox))
