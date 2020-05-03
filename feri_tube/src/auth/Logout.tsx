import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { ILogoutProps } from '../types/interfaces';
import { Button } from '@material-ui/core';

export const Logout = ({ logout }: ILogoutProps) => {
  console.log(logout)
  return (
    <Fragment>
      <Button style={{color: "#fff", textDecoration: "none"}} onClick={logout} href="#">
        LOGOUT
      </Button>
    </Fragment>
  );
};

export default connect(null, { logout })(Logout);