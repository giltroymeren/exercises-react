import { useEffect } from 'react';
import { connect } from 'react-redux';

import { login, logout } from '../actions'
import { IRootState } from '../store';
import { EActionTypes } from '../types';

interface IProps {
  loggedIn: boolean
  login: () => { type: EActionTypes }
  logout: () => { type: EActionTypes }
}

const Auth = ({
  loggedIn,
  login,
  logout
}: IProps) => {
  useEffect(() => { }, [loggedIn])

  if (loggedIn) {
    return <i className="sign-out icon red"
      onClick={() => logout()}></i>;
  }
  return <i className="sign-in icon blue"
    onClick={() => login()}></i>;
};

const mapStateToProps = (state: IRootState) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(
  mapStateToProps,
  { login, logout }
)(Auth)
