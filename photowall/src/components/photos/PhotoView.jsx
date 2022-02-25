import React from "react"
import Comments from "../comments/Comments"
import Photo from "./Photo"

const PhotoView = (props) => {
  const id = props.match.params.id
  const photo = props.photos.filter(photo => photo.id === id)[0]

  const getFilteredComments = () => {
    return props.comments
     .filter(comment => comment.parentId == id)
   }
  const filteredComments = getFilteredComments() || []

  return (
    <div className='single-photo'>
      <Photo 
        key={photo.id}
        photo={photo}
        {...props} />
      <Comments
        parentId={photo.id}
        addComment={props.addComment}
        comments={filteredComments} />
    </div>
  )
}

export default PhotoView