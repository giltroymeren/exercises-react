import React from 'react';
import { connect } from 'react-redux';
import { depositBalance, withdrawBalance } from '../actions/balance'

export class Wallet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: 0
    }
  }

  updateBalance = (event) => {
    this.setState({
      balance: event.target.value
    })
  }

  deposit = () => this.props.depositBalance(this.state.balance)
  withdraw = () => this.props.withdrawBalance(this.state.balance)

  render() {
    return (
      <div>
        <h3 className='balance'>
          Wallet Balance: $<span>{this.props.balance || '0.00'}</span>
        </h3>

        <div>
          <label htmlFor='amount'>Amount:</label>{' '}
          <input type='number'
            className='input-amount'
            name='amount'
            placeholder='0.0'
            onChange={this.updateBalance}
          />
        </div>

        <button className='btn-deposit'
          onClick={this.deposit}>
          Deposit
        </button>

        <button className='btn-withdraw'
          onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    balance: state
  }
}

export default connect(
  mapStateToProps,
  {
    depositBalance,
    withdrawBalance
  }
)(Wallet);
