import React, { useReducer } from "react"
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'
import { ACTION_REMOVE_ALERT, ACTION_SET_ALERT } from "../types"

const AlertState = (props) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const removeAlert = () => dispatch({
    type: ACTION_REMOVE_ALERT
  })

  const setAlert = (message, type) => {
    dispatch({
      type: ACTION_SET_ALERT,
      payload: {
        message,
        type
      }
    })

    setTimeout(() => removeAlert(), 1500)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,

        removeAlert,
        setAlert
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState