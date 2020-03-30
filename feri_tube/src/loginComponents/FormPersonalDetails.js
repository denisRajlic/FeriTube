import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const FormPersonalDetails = (props) => {

  const proceed = e => {
    e.preventDefault(); 
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  }

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
            Enter Personal Details
      </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <TextField 
        label="Status..."        
        onChange={handleChange('status')}
        defaultValue={values.status}
      ></TextField>
      <br />

      <TextField 
        label="City"        
        onChange={handleChange('city')}
        defaultValue={values.city}
      ></TextField>
      <br />

      <Button                         
        variant="contained"        
        color="primary"
        onClick={proceed}
        >
          Continue
        </Button>

        <Button    
        variant="contained"                     
        color="secondary"   
        style={styles.button}
        onClick={back}
        >
          Back
        </Button>
    </React.Fragment>
  )
}

const styles = {
  button: {
    margin: 15    
  }
}

export default FormPersonalDetails;