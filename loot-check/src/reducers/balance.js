import { ACTION_DEPOSIT_BALANCE, ACTION_SET_BALANCE, ACTION_WITHDRAW_BALANCE } from "../actions/constants";

const balanceReducer = (state, action) => {
  switch (action.type) {
    case ACTION_DEPOSIT_BALANCE:
      return (state.balance + action.payload)

    case ACTION_SET_BALANCE:
      return action.payload

    case ACTION_WITHDRAW_BALANCE:
      return (state.balance - action.payload)

    default:
      return state
  }
}

export default balanceReducer