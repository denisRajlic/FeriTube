import React from 'react';
import TextField from '@material-ui/core/TextField';
import ProceedButton from '../Styles/ProceedButton';
import axios from 'axios';
import { register } from '../actions/authActions';
import { connect } from 'react-redux';

const FormUserDetails = props => {

  const submitHandler = e => {
    e.preventDefault();    

    register(values);   
  }

  // Destructuring
  const { values, handleChange } = props;

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <TextField 
          id='first_name'
          label="First Name..."        
          onChange={handleChange('first_name')}
          defaultValue={values.first_name}
        ></TextField>
        <br />

        <TextField 
          id='last_name'
          label="Last Name..."        
          onChange={handleChange('last_name')}
          defaultValue={values.last_name}
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default FormUserDetails;