import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAuthReduxProps, IAppNavbar } from '../types/interfaces';

import Logout from '../auth/Logout';
import { NavItem } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));


const Navigation = ({ auth }: IAppNavbar) => {
  const classes = useStyles();
  const username = auth?.data?.relationships?.user?.username

  // Links
  const authLinks = (
    <Fragment>
      <Button color="inherit">
          <span className="navbar-text mr-3">
            <strong>
              {username ? `Welcome ${username}` : ''}
            </strong>
          </span>
        </Button>
      <Logout />
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button component={ Link } color="inherit" to="/contact">Contact</Button>
      <Button component={ Link } color="inherit" to="/register">Register</Button>
      <Button component={ Link } color="inherit" to="/login">Login</Button>
    </Fragment>
  );


  return (
    <div>
    <AppBar position="static" style={{ backgroundColor: '#006a8e' }}>
        <Toolbar>
          <Link to="/">
            <img src={require('../Assets/logo2.png') } alt="logo" width="100" height="66" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            {}
          </Typography>
          {auth && auth.isAuthenticated ? authLinks : guestLinks }
        </Toolbar>
    </AppBar>
    </div>
  );
};

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Navigation);
