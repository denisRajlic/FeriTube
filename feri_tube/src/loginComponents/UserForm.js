// Parent component
import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

const UserForm = () => {

  const [state, setState] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    city: ''
  });

  // Proceed to next step
  const nextStep = () => {    
    const { step } = state;        
    setState({
      ...state,
      step: step + 1
    });
  }

  // Go back to previous step
  const prevStep = () => {
    const { step } = state;    
    setState({
      ...state,
      step: step - 1
    });
  }

  // Handle fields change
  const handleChange = input => e => {        
    setState({
      ...state,
      [input]: e.target.value
    });

  };

  const { step } = state;
  const { firstName, lastName, email, status, city } = state;
  const values = { firstName, lastName, email, status, city }

  // Based on the steps we show the correct component
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />                
      )
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />        
      )
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}          
          values={values}
        />
      )
    case 4:
      return <h1>Success</h1>
    default:
      return <h1>Ups! Not handled properly</h1>
  }
}

export default UserForm;
