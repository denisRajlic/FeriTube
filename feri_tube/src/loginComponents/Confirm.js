import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';



const Confirm = (props) => {

  const proceed = e => {
    e.preventDefault(); 
    //TODO Process FORM - Wait for Backend// 
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  }

  // Destructuring
  const { values: { firstName, lastName, email, status, city } } = props;
  
  const useStyles = makeStyles((theme) => ({
    marginAutoContainer: {
      width: "50%", 
      margin: "auto",
      alignItems: "center",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      

      <List className={classes.marginAutoContainer}> 
        <ListItem className={classes.marginAutoContainer} alignItems="flex-end">
          <ListItemText
            primary="First Name"
            secondary={firstName}
          />
        </ListItem>
        <ListItem className={classes.marginAutoContainer}>
          <ListItemText
            primary="Last Name"
            secondary={lastName}
          />
        </ListItem>
        <ListItem className={classes.marginAutoContainer}>
          <ListItemText
            primary="Email"
            secondary={email}
          />
        </ListItem>
        <ListItem className={classes.marginAutoContainer}>
          <ListItemText
            primary="Status"
            secondary={status}
          />
        </ListItem>
        <ListItem className={classes.marginAutoContainer}>
          <ListItemText
            primary="City"
            secondary={city}
          />
        </ListItem>
      </List>
      
      <Button   
        variant="contained"                      
        color="primary"
        style={styles.button}
        onClick={proceed}
        >
          Confirm & Continue
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

export default Confirm;