import { IRootState } from "../store"
import { EActionTypes } from "../types"

interface ILoginActionType {
  type: EActionTypes.login
}

interface ILogoutActionType {
  type: EActionTypes.logout
}

interface IState {
  loggedIn: boolean
}

export default (
  state: IState = { loggedIn: false },
  action: ILoginActionType | ILogoutActionType
) => {
  switch (action.type) {
    case EActionTypes.login:
      return {
        ...state,
        loggedIn: true
      }

    case EActionTypes.logout:
      return {
        ...state,
        loggedIn: false
      }

    default:
      return state
  }
}