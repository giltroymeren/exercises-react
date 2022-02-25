import balanceReducer from './balance'
import * as constants from '../actions/constants'

describe('BalanceReducer', () => {
  it('sets a balance', () => {
    const amount = 100

    const action = {
      type: constants.ACTION_SET_BALANCE,
      payload: amount
    }

    expect(balanceReducer({ balance: 0 }, action)).toEqual(amount)
  })

  it('deposits an amount and updates balance', () => {
    const balance = 100
    const amount = 100

    const action = {
      type: constants.ACTION_DEPOSIT_BALANCE,
      payload: amount
    }

    expect(balanceReducer({ balance }, action)).toEqual(balance + amount)
  })

  it('withdraws an amount and updates balance', () => {
    const balance = 100
    const amount = 100

    const action = {
      type: constants.ACTION_WITHDRAW_BALANCE,
      payload: amount
    }

    expect(balanceReducer({ balance }, action)).toEqual(balance - amount)
  })
})
