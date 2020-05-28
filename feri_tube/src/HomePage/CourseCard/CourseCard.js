import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CourseCard = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='150'
            image={require('../../Assets/modro.png')}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' align='left'>
              {props.naslov}
            </Typography>
            <Typography
              align='justify'
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {props.opis}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CourseCard;
