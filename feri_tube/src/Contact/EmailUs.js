import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  element: {
    margin: 8,
  },
}));

const EmailUs = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography gutterBottom variant="h5" align="center" color="textPrimary">
        Contact Us
      </Typography>
      <form
        action="mailto:someone@example.com"
        method="post"
        encType="text/plain"
      >
        <TextField
          label="Name"
          name="name"
          type="text"
          className={classes.element}
          required
        />
        <br />
        <TextField
          label="E-mail"
          name="mail"
          type="email"
          className={classes.element}
          required
        />
        <br />
        <TextField
          label="Message"
          name="comment"
          multiline
          rows={4}
          type="text"
          className={classes.element}
          required
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          Send
        </Button>
      </form>
    </Grid>
  );
};

export default EmailUs;
