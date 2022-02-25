import React from 'react'
import { Link } from 'react-router-dom'
import { PATH_VIEW } from '../../common/routes'

const Photo = (props) => {
  const photo = props.photo
  return (
    <figure className='figure'>
      <Link to={`/${PATH_VIEW}/${photo.id}`}>
        <img
          className='photo'
          src={photo.link}
          alt={photo.desc} />
      </Link>

      <figcaption>
        <p>{photo.desc}</p>
      </figcaption>

      <div className='button-container'>
        <button
          className='remove-button'
          onClick={() => {
            props.removePhoto(photo.id)
          }}>Remove</button>
      </div>
    </figure>
  )
}

export default Photo