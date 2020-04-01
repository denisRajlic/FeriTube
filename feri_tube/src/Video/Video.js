import React from 'react';
import ReactDOM from 'react-dom';
import Youtube from '@u-wave/react-youtube';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from '@material-ui/core/Box';
/*
const Video = props => {
	return (
		<div style={{margin: '15px'}}>
			<Grid container alignItems='center' justify='center'>
				<Grid item sm='6'>
					<Youtube
						video='rEq1Z0bjdwc'
						autoplay='true'

					/>
				</Grid>
			</Grid>
		</div>
	);	
};
*/


const Video = props => {
	return (
		<div style={{margin: '15px'}}>
			<Grid container alignItems='center' direction='column'>
				<Grid item>
					<ReactPlayer 
						url='https://www.youtube.com/watch?v=rEq1Z0bjdwc' 
						playing='true'
						controls='true'
					/>
				</Grid>
				<Grid item>
					<p style={{border: '1px'}}>Hello there</p>
				</Grid>
			</Grid>
		</div>
	);	
};



export default Video;