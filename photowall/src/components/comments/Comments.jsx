import React, { useState } from "react"
import CommentsList from "./CommentsList"

const Comments = (props) => {
  const [inputComment, setInputComment] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.addComment({
      parentId: props.parentId,
      text: inputComment
    })
    setInputComment('')
  }

  const onInputCommentChangeHandler = (event) => {
    setInputComment(event.target.value)
  }

  return (
    <div className="comments">
      <h3>Comments</h3>
      <CommentsList comments={props.comments} /> 

      <form className="comment-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What do you think?"
          value={inputComment}
          onChange={onInputCommentChangeHandler} />
        <input
          type="submit"
          className="" />
      </form>
    </div>
  )
}

export default Comments
