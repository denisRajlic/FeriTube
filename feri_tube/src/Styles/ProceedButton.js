import {  withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ProceedButton = withStyles((theme) => ({
  root: {     
    backgroundColor: '#006a8e',    
    '&:hover': {
      backgroundColor: '#005e8e',       
    },
    margin: 15  
  }
}))(Button);

export default ProceedButton;