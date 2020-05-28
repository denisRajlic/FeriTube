import React from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Grid from '@material-ui/core/Grid';
import CourseCard from './CourseCard/CourseCard';
import { useHistory } from "react-router-dom";
import uuid from 'uuid'

const HomePage = props => {
  let history = useHistory();
  
  let cards = props.podatki.map((item) => {
    return (
      <Grid key={uuid()} item lg={3} align='center' onClick = {() => {props.setter(item);
        history.push('/videoSubject')
      }}>
        <CourseCard naslov={item.name} opis={item.opis} dolzina={item.dolzina}  />
      </Grid>
    );
  });

  return (
    <div style={{ margin: '15px' }}>
      <Grid container alignItems='center' justify='center' allign='center'>
        <Grid item>
          <Jumbotron />
        </Grid>
      </Grid>

      <Grid container justify='center' style={{ marginTop: '5px' }} spacing={1}>
        {cards}
      </Grid>
    </div>
  );
};

export default HomePage;
