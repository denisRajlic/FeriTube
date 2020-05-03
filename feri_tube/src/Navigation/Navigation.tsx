import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Logout from '../auth/Logout';

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

export const Navigation = () => {
  const classes = useStyles();
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
          <Button component={ Link } color="inherit" to="/contact">Contact</Button>
          <Button component={ Link } color="inherit" to="/register">Register</Button>
          <Button component={ Link } color="inherit" to="/login">Login</Button>
          <Logout />
        </Toolbar>
    </AppBar>
    </div>
  );
};

export default (Navigation);
