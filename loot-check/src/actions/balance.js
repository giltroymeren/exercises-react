import {
  ACTION_DEPOSIT_BALANCE,
  ACTION_SET_BALANCE,
  ACTION_WITHDRAW_BALANCE
} from "./constants"

export const setBalance = (amount) => {
  return {
    type: ACTION_SET_BALANCE,
    payload: amount
  }
}

export const depositBalance = (amount) => {
  return {
    type: ACTION_DEPOSIT_BALANCE,
    payload: amount
  }
}

export const withdrawBalance = (amount) => {
  return {
    type: ACTION_WITHDRAW_BALANCE,
    payload: amount
  }
}