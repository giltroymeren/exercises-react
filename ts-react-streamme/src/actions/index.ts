import { EActionTypes } from '../types'

export const login = () => {
  return {
    type: EActionTypes.login
  }
}

export const logout = () => {
  return {
    type: EActionTypes.logout
  }
}