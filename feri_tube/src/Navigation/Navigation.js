import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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


const Navigation = () => {
    const classes = useStyles();

  return (
    <div>
    <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img src={require('../Assets/logo.png') } alt="logo" width="160" height="66" />
          </a>
          <Typography variant="h6" className={classes.title}>
            {}
          </Typography>
          <Button component={ Link } color="inherit" to="/register">Register</Button>
          <Button component={ Link } color="inherit" to="/login">Login</Button>
        </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navigation;
