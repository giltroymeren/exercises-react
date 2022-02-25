import {
  ACTION_SET_CONNECTED,
  ACTION_SET_DISCONNECTED
} from "./actions"

const INITIAL_STATE = {
  stockList: [],
  connected: false,
}

const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_SET_CONNECTED:
      return {
        ...state,
        connected: true
      }

    case ACTION_SET_DISCONNECTED:
      return {
        ...state,
        connected: false
      }

    default: return state
  }
}

export default stockReducer