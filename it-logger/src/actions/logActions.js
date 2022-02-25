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
} from './types'

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading()

    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()

    dispatch({
      type: ACTION_ADD_LOG,
      payload: result
    })
  } catch (error) {
    // TODO: refactor to common function
    dispatch({
      type: ACTION_SET_LOGS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading()

    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: ACTION_DELETE_LOG,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_LOGS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const getLogs = () => async (dispatch) => {
  try {
    setLoading()

    const response = await fetch('/logs')
    const result = await response.json()

    dispatch({
      type: ACTION_GET_LOGS,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_LOGS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const searchLogs = (query) => async (dispatch) => {
  try {
    setLoading()

    const response = await fetch(`/logs?q=${query}`)
    const result = await response.json()

    dispatch({
      type: ACTION_SEARCH_LOGS,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_LOGS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading()

    await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    dispatch({
      type: ACTION_UPDATE_LOG,
      payload: log
    })
  } catch (error) {
    dispatch({
      type: ACTION_SET_LOGS_ERROR,
      payload: error.response.statusText
    })
  }
}

export const setCurrent = log => {
  return {
    type: ACTION_SET_CURRENT,
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: ACTION_CLEAR_CURRENT,
  }
}

// TODO: refactor to common function
export const setLoading = () => {
  return {
    type: ACTION_SET_LOADING
  }
}