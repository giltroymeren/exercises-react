import {
  ACTION_ADD_TECH,
  ACTION_DELETE_TECH,
  ACTION_GET_TECHS,
  ACTION_SET_LOADING,
  ACTION_SET_TECHS_ERROR,
} from './types'

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading()

    const response = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()

    dispatch({
      type: ACTION_ADD_TECH,
      payload: result
    })
  } catch (error) {
    // TODO: refactor to common function
    dispatch({
      type: ACTION_SET_TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading()

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: ACTION_DELETE_TECH,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const getTechs = () => async (dispatch) => {
  try {
    setLoading()

    const response = await fetch('/techs')
    const result = await response.json()

    dispatch({
      type: ACTION_GET_TECHS,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

// TODO: refactor to common function
export const setLoading = () => {
  return {
    type: ACTION_SET_LOADING
  }
}