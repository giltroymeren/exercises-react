import { fetchComments, saveComment } from "."
import { ACTION_COMMENTS_FETCH, ACTION_COMMENT_SAVE } from "./types"

describe('saveComment', () => {
  it('has the correct type', () => {
    expect(saveComment().type).toEqual(ACTION_COMMENT_SAVE)
  })

  it('has the correct payload', () => {
    const expectedComment = 'This is a comment.'

    expect(saveComment(expectedComment).payload).toEqual(expectedComment)
  })
})
