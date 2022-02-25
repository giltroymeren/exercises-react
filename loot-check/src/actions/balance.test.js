import * as constants from './constants'
import * as actions from './balance'

it('creates an action to set the balance', () => {
  const amount = 0

  const expectedAction = {
    type: constants.ACTION_SET_BALANCE,
    payload: amount
  }

  expect(actions.setBalance(amount)).toEqual(expectedAction)
})

it('creates an action to deposit', () => {
  const amount = 100

  const expectedAction = {
    type: constants.ACTION_DEPOSIT_BALANCE,
    payload: amount
  }

  expect(actions.depositBalance(amount)).toEqual(expectedAction)
})

it('creates an action to withdraw', () => {
  const amount = 100

  const expectedAction = {
    type: constants.ACTION_WITHDRAW_BALANCE,
    payload: amount
  }

  expect(actions.withdrawBalance(amount)).toEqual(expectedAction)
})