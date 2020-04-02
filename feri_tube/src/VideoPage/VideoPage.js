import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Video from './Components/Video';
import HorizontalStepper from './Components/Stepper';

const VideoPage = props => {
	return (
		<div style={{margin: '15px'}}>
			<Grid container alignItems='center' direction='column'>
				<Grid item>
					<Video/>
				</Grid>
				<Grid item>
					<p>Hello there</p>
				</Grid>
				<Grid item xs={12}>
					
				</Grid>
			</Grid>
			<HorizontalStepper/>
		</div>
	);	
};

export default VideoPage;