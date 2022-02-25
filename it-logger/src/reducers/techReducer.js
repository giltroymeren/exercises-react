import {
  ACTION_GET_TECHS,
  ACTION_SET_LOADING,
  ACTION_ADD_TECH,
  ACTION_DELETE_TECH,
} from '../actions/types'

const initialState = {
  techs: null,
  loading: false,
  error: null,
}

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      }

    case ACTION_DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      }

    case ACTION_GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      }

    case ACTION_SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    default: return state
  }
}

export default techReducer