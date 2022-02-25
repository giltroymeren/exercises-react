import React from "react"

const CommentsList = (props) => {
  return (
    <React.Fragment>
    { props.comments
      .map(comment => (
      <p key={comment.id}>{comment.text}</p>
    ))}
    </React.Fragment>
  )
}

export default CommentsList