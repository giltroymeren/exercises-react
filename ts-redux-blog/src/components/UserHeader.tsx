import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState, IUser } from '../common/types';

interface IOwnProps {
  userId: number
}

interface IConnectedProps {
  userId: number
  user: IUser | undefined
}

type TComponentProps = IConnectedProps & IOwnProps

const UserHeader = ({
  userId,
  user
}: TComponentProps) => {

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <div className="header">{user.name}</div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IOwnProps
) => {
  return {
    user: state.users.find(
      (user: IUser) => user.id === ownProps.userId)
  }
}

export default connect(
  mapStateToProps,
  {}
)(UserHeader)
