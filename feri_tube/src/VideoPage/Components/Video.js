import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

const Video = props => {
	return (
		<ReactPlayer 
			url='https://www.youtube.com/watch?v=rEq1Z0bjdwc' 
			playing='true'
			controls='true'
		/>
	);	
};

export default Video;