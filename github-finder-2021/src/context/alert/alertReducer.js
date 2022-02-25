import { ACTION_REMOVE_ALERT, ACTION_SET_ALERT } from "../types"

const AlertReducer = (state, action) => {
  switch (action.type) {
    case ACTION_REMOVE_ALERT:
      return null

    case ACTION_SET_ALERT:
      return action.payload

    default: return state
  }
}

export default AlertReducer