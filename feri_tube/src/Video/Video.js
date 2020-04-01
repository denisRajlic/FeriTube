import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

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