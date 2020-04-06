import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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


  return (
    <React.Fragment>
     

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