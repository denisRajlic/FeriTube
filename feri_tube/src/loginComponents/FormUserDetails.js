import React from 'react';
import TextField from '@material-ui/core/TextField';
import ProceedButton from '../Styles/ProceedButton';

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
        label="Username..."        
        onChange={handleChange('username')}
        defaultValue={values.username}
      ></TextField>
      <br />

      <TextField 
        label="Password..."    
        type="password"    
        onChange={handleChange('password')}
        defaultValue={values.password}
      ></TextField>
      <br/>

      <TextField 
        label="Email..."        
        onChange={handleChange('email')}
        defaultValue={values.email}
      ></TextField>
      <br />

      <ProceedButton   
        variant="contained"                      
        color="primary"
        onClick={proceed}
        >
          Continue
        </ProceedButton>

    </React.Fragment>      
  )
}

export default FormUserDetails;