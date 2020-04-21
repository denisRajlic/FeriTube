import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SchoolIcon from "@material-ui/icons/School";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  list: {
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
    align: "center",
  },
  element: {
    margin: 8,
  },
}));

const SocialMedia = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          color="textPrimary"
        >
          Follow Us
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List component="nav" className={classes.list} aria-label="contacts">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            color="inherit"
          >
            <ListItem button className={classes.element}>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" color="inherit">
            <ListItem button className={classes.element}>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="YouTube" />
            </ListItem>
          </Link>
          <Link href="https://feri.um.si/" target="_blank" color="inherit">
            <ListItem button className={classes.element}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="UM FERI" />
            </ListItem>
          </Link>
        </List>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
