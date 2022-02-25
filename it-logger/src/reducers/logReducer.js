import {
  ACTION_ADD_LOG,
  ACTION_CLEAR_CURRENT,
  ACTION_DELETE_LOG,
  ACTION_GET_LOGS,
  ACTION_SEARCH_LOGS,
  ACTION_SET_CURRENT,
  ACTION_SET_LOADING,
  ACTION_SET_LOGS_ERROR,
  ACTION_UPDATE_LOG
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
}

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      }

    case ACTION_DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      }

    case ACTION_GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }

    case ACTION_SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }

    case ACTION_UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => (
          log.id === action.payload.id ? action.payload : log
        )),
        loading: false
      }

    // TODO: refactor to common
    case ACTION_SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    case ACTION_CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }

    case ACTION_SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    // TODO: refactor to common
    case ACTION_SET_LOGS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }

    default: return state
  }
}

export default logReducer