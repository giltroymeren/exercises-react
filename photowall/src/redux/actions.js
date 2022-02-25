export const ACTION_ADD_PHOTO = 'ADD_PHOTO'
export const ACTION_REMOVE_PHOTO = 'REMOVE_PHOTO'
export const ACTION_ADD_COMMENT = 'ADD_COMMENT'

export const addPhoto = (photo) => {
  const id = Number(new Date())
  console.log(`Adding photo #${id}`)
  return {
    type: ACTION_ADD_PHOTO,
    payload: {
      id: id,
      link: photo.link,
      desc: photo.desc
    }
  }
}

export const removePhoto = (id) => {
  console.log(`Removing photo #${id}`)
  return {
    type: ACTION_REMOVE_PHOTO,
    payload: id
  }
}

export const addComment = (comment) => {
  const id = Number(new Date())
  console.log(`Adding comment #${id}`)
  return {
    type: ACTION_ADD_COMMENT,
    payload: {
      id: id,
      parentId: comment.parentId,
      text: comment.text
    }
  }
}
