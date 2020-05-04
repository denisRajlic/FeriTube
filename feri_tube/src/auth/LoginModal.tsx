import React, { useState, useCallback, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import ProceedButton from '../Styles/ProceedButton';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import {
  ILoginModal,
  ITarget,
  IAuthReduxProps
} from '../types/interfaces';

const LoginModal = ({
  isAuthenticated,
  error,
  login,
  clearErrors
}: ILoginModal) => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const handleChangeUsername = (e: ITarget) => setUsername(e.target.value);
  const handleChangePassword = (e: ITarget) => setPassword(e.target.value);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    // Create user object
    const user = {
      username,
      password
    };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
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

export default connect(mapStateToProps, { login, clearErrors })(
  LoginModal
);