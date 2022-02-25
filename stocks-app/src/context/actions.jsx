export const ACTION_SET_CONNECTED = 'SET_CONNECTED'
export const ACTION_SET_DISCONNECTED = 'SET_DISCONNECTED'

export const setConnected = () => {
  return { type: ACTION_SET_CONNECTED }
}

export const setDisconnected = () => {
  return { type: ACTION_SET_DISCONNECTED }
}