import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Video from './Components/Video';

const VideoPage = props => {
	return (
		<div style={{margin: '15px'}}>
			<Grid container alignItems='center' direction='column'>
				<Grid item>
					<Video/>
				</Grid>
			</Grid>
		</div>
	);	
};

export default VideoPage;