import { saveComment } from '../actions'
import { ACTION_COMMENT_SAVE } from '../actions/types'
import commentReducer from './commentReducer'

const initialState = []

describe('commentReducer', () => {
  it(`handles ${ACTION_COMMENT_SAVE} actions`, () => {
    const expectedComment = 'This is a comment.'
    const expectedAction = {
      type: ACTION_COMMENT_SAVE,
      payload: expectedComment
    }

    const newState = commentReducer(initialState, expectedAction)
    expect(newState).toEqual([expectedComment])
  })

  it('handles unknown actions', () => {
    const expectedAction = {
      type: 'UNKNOWN_ACTION',
      payload: ''
    }

    const newState = commentReducer(initialState, expectedAction)
    expect(newState).toEqual([])
  })
})