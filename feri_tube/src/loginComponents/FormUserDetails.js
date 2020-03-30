import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


const FormUserDetails = (props) => {

  const proceed = e => {
    e.preventDefault(); 
    props.nextStep();
  };

  // Destructuring
  const { values, handleChange } = props;
  

  return (
    <React.Fragment>

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