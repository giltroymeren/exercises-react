import { ACTION_LOGIN, ACTION_LOGOUT } from "../actions/types";

export default function (state = false, action) {
  switch (action.type) {
    case ACTION_LOGIN:
      return true

    case ACTION_LOGOUT:
      return false

    default:
      return state
  }
}