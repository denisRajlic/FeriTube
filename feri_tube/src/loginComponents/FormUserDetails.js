import React from 'react';
import TextField from '@material-ui/core/TextField';
import ProceedButton from '../Styles/ProceedButton';
import axios from 'axios';

const FormUserDetails = (props) => {

  const proceed = e => {
    e.preventDefault(); 
    props.nextStep();
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(values);
    axios.post('https://tretjaskupina.team/api/v1/auth/student/register', values)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Destructuring
  const { values, handleChange } = props;

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <TextField 
          id='first_name'
          label="First Name..."        
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        ></TextField>
        <br />

        <TextField 
          id='last_name'
          label="Last Name..."        
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        ></TextField>
        <br />    

        <TextField 
          id='username'
          label="Username..."        
          onChange={handleChange('username')}
          defaultValue={values.username}
        ></TextField>
        <br />

        <TextField 
          id='password'
          label="Password..."    
          type="password"    
          onChange={handleChange('password')}
          defaultValue={values.password}
        ></TextField>
        <br/>

        <TextField 
          id='email'
          label="Email..."        
          onChange={handleChange('email')}
          defaultValue={values.email}
        ></TextField>
        <br />

        <ProceedButton   
          variant="contained"                      
          color="primary"
          type="submit"        
          >
            Submit
          </ProceedButton>

      </form>
      
    </React.Fragment>      
  )
}

export default FormUserDetails;