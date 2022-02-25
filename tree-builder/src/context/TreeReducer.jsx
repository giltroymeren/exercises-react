export const ACTION_SET_BRANCH_CHECKED = 'SET_BRANCH_CHECKED'

const TreeReducer = (state, action) => {
  switch(action.type) {
    case ACTION_SET_BRANCH_CHECKED:
      return {
        ...state,
        tree: action.payload
      }

    default: return state
  }
}

export default TreeReducer