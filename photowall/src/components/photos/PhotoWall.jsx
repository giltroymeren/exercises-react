import React from 'react'
import { Link } from 'react-router-dom'
import { PATH_ADD } from '../../common/routes'
import Photo from './Photo'

const PhotoWall = (props) => {
  const photos = props.photos
  return (
    <div>
      <Link
        className='add-icon'
        to={`/${PATH_ADD}`} />

      <div className="photo-grid">
        {photos.length > 0 && photos.sort((a, b) => a - b)
          .map(photo => (
            <Photo
              key={photo.id}
              photo={photo}
              {...props} />
          ))}
        {photos.length === 0 &&
          <h4>No photos available</h4>}
      </div>
    </div>
  )
}

export default PhotoWall