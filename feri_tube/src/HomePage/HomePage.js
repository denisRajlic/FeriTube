import React from "react";
import Jumbotron from "./Jumbotron/Jumbotron";
import Grid from "@material-ui/core/Grid";

const HomePage = props => {
  return (
    <div style={{ margin: "15px"}} >
      <Grid container alignItems="center" justify="center">
        <Grid item lg={6}>
          <Jumbotron />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
