import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Success from '../loginComponents/Success';

const proceed = () => {
  //TODO 
}

const Login = () => {
  return (
    <React.Fragment>

      <TextField 
        label="Username..."                       
      ></TextField>
      <br />

      <TextField 
        label="Password..." 
        type="password"               
      ></TextField>
      <br />

      <Button   
        variant="contained"                      
        color="primary"
        style={styles.button}
        // TODO send data to backend
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

export default Login;
