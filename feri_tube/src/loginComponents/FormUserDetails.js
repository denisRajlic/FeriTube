import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const FormUserDetails = (props) => {

  const proceed = e => {
    e.preventDefault(); 
    props.nextStep();
  };

  // Destructuring
  const { values, handleChange } = props;
  
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

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Enter User Details
      </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <TextField 
        label="First Name..."        
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
      ></TextField>
      <br />

      <TextField 
        label="Last Name..."        
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
      ></TextField>

      <br />

      <TextField 
        label="Email..."        
        onChange={handleChange('email')}
        defaultValue={values.email}
      ></TextField>

      <br/>

      <Button   
        variant="contained"                      
        color="primary"
        style={styles.button}
        onClick={proceed}
        >
          Continue
        </Button>

    </React.Fragment>      
  )
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails;