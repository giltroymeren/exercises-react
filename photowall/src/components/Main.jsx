import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { PATH_ADD, PATH_VIEW } from '../common/routes'
import AddPhotoForm from './photos/AddPhotoForm'
import PhotoView from './photos/PhotoView'
import PhotoWall from './photos/PhotoWall'
import Title from './Title'

const Main = (props) => {
  useEffect(() => {
    console.log('photowall RUNNING...')
    console.log(props)
  })

  return (
    <div>
      <Title />

      <Switch>
        <Route exact path='/'>
          <PhotoWall photos={props.photos} {...props} />
        </Route>

        <Route exact path={`/${PATH_ADD}`} >
          <AddPhotoForm {...props} />
        </Route>

        <Route exact path={`/${PATH_VIEW}/:id`}
          render={params => <PhotoView {...params} {...props} />
          } />
      </Switch>
    </div>
  )
}

export default Main