import { shallow } from "enzyme";
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const mockDepositBalance = jest.fn()
  const mockWithdrawBalance = jest.fn()

  const props = {
    balance: 100,
    depositBalance: mockDepositBalance,
    withdrawBalance: mockWithdrawBalance
  }
  const app = shallow(<Wallet {...props} />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('displays the current balance from props', () => {
    expect(app.find('.balance span').text()).toEqual(`${props.balance}`)
  })

  it('shows a number field indicate deposit/withdraw amount', () => {
    expect(app.find('.input-amount').exists()).toBe(true)
  })

  describe('when the use types into the amount field', () => {
    const balance = 100

    beforeEach(() => {
      app.find('.input-amount').simulate('change', {
        target: { value: balance }
      })
    })

    it('updates the balance in `state`', () => {
      expect(app.state().balance).toEqual(balance)
    })

    describe('and the user performs a deposit', () => {
      beforeEach(() => {
        app.find('.btn-deposit').simulate('click')
      })

      it('dispatches the `depositBalance()` it receives from `props` with local balance', () => {
        expect(mockDepositBalance).toHaveBeenCalledWith(balance)
      })
    })

    describe('and the user performs a withdraw', () => {
      beforeEach(() => {
        app.find('.btn-withdraw').simulate('click')
      })

      it('dispatches the `withdrawBalance()` it receives from `props` with local balance', () => {
        expect(mockWithdrawBalance).toHaveBeenCalledWith(balance)
      })
    })
  })
})