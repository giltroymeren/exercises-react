import React, { useState } from "react"

const AddPhotoForm = (props) => {
  const [inputLink, setInputLink] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.addComment({
      link: inputLink,
      desc: inputDescription
    })

    setInputLink('')
    setInputDescription('')
  }

  const onInputLinkChangeHandler = (event) => {
    setInputLink(event.target.value)
  }
  const onInputDescriptionChangeHandler = (event) => {
    setInputDescription(event.target.value)
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={submitHandler}>
        <h2>Add a new photo!</h2>

        <input
          type="text"
          name="link"
          placeholder="Link to the photo"
          value={inputLink}
          onChange={onInputLinkChangeHandler} />
        <input
          type="text"
          name="description"
          placeholder="Description of the photo" 
          value={inputDescription}
          onChange={onInputDescriptionChangeHandler} />
        <button>Add Photo</button>
      </form>
    </div>
  )
}

export default AddPhotoForm