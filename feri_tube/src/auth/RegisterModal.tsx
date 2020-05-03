import React, { useState, useCallback, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import ProceedButton from '../Styles/ProceedButton';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import {
  IRegisterModal,
  ITarget,
  IAuthReduxProps
} from '../types/interfaces';

const RegisterModal = ({
  isAuthenticated,
  error,
  register,
  clearErrors
}: IRegisterModal) => {
  const [modal, setModal] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const handleChangeFirstName = (e: ITarget) => setFirstName(e.target.value);
  const handleChangeLastName = (e: ITarget) => setLastName(e.target.value);
  const handleChangeEmail = (e: ITarget) => setEmail(e.target.value);
  const handleChangeUsername = (e: ITarget) => setUsername(e.target.value);
  const handleChangePassword = (e: ITarget) => setPassword(e.target.value);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    // Create user object
    const user = {
      first_name,
      last_name,
      email,
      username,
      password
    };

    // Attempt to login
    register(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);

  return (
      <React.Fragment>
      <form onSubmit={handleOnSubmit}>
        <TextField 
          id='first_name'
          label="First Name..."        
          onChange={handleChangeFirstName}
        ></TextField>
        <br />

        <TextField 
          id='last_name'
          label="Last Name..."        
          onChange={handleChangeLastName}
        ></TextField>
        <br />    

        <TextField 
          id='username'
          label="Username..."        
          onChange={handleChangeUsername}
        ></TextField>
        <br />

        <TextField 
          id='password'
          label="Password..."    
          type="password"    
          onChange={handleChangePassword}
        ></TextField>
        <br/>

        <TextField 
          id='email'
          label="Email..."        
          onChange={handleChangeEmail}
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
  );
};

const mapStateToProps = (state: IAuthReduxProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);