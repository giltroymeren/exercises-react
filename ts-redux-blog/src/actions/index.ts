import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import _ from 'lodash'

import jsonPlaceholder from '../api/jsonPlaceholder'
import { EActionTypes, IPost, IRootState, IUser } from '../common/types'

export const fetchPostsAndUsers = () =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => IRootState) => {
    await dispatch(fetchPosts())

    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach((id: number) => dispatch(getUser(id)))
  }

interface IUserResponse {
  data: IUser
}

export const getUser = (id: number) =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response: IUserResponse = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({
      type: EActionTypes.getUser,
      payload: response.data
    })
  }

interface IPostResponse {
  data: IPost[]
}

const fetchPosts = () =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response: IPostResponse = await jsonPlaceholder.get('/posts')
    dispatch({
      type: EActionTypes.fetchPosts,
      payload: response.data
    })
  }