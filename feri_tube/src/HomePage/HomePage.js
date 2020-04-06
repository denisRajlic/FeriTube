import React from "react";
import Jumbotron from "./Jumbotron/Jumbotron";
import Grid from "@material-ui/core/Grid";
import CourseCard from "./CourseCard/CourseCard";

const HomePage = (props) => {
  return (
    <div style={{ margin: "15px" }}>
      <Grid container alignItems="center" justify="center" allign="center" >
        <Grid item >
          <Jumbotron />
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        style={{ marginTop: "5px" }}
        spacing={1}
        
      >
        <Grid item lg={3} align="center">
          <CourseCard naslov="Python"/>
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="Java" />
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="Assembler" />
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="Matematika" />
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="C++"/>
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="C" />
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="Vaje za razgibavanje" />
        </Grid>
        <Grid item lg={3} align="center">
          <CourseCard naslov="Javascript" />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default HomePage;
