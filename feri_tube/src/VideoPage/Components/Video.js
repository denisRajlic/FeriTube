import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import Stepper from'@material-ui/core/Stepper';
import Step from'@material-ui/core/Step';
import StepLabel from'@material-ui/core/StepLabel';
import StepButton from'@material-ui/core/StepButton';
import {makeStyles} from'@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function getSteps(urls) {
	var steps = [];
	for(var i = 1; i < urls.length + 1; i++) {
		steps.push("Part " + i);
	}
	return steps;
}

function getUrls() {
	return [
		'https://www.youtube.com/watch?v=rEq1Z0bjdwc',
		'https://www.youtube.com/watch?v=Uj2Q3L134mY',
		'https://www.youtube.com/watch?v=BLqktDBIew8',
		'https://www.youtube.com/watch?v=YQS4o_bYA_M'
	];
}

function getUrl(urls, step) {
	return urls[step];
}

function getStepDescription(step) {
	switch (step) {
		case 0:
			return 'This is Part 1';
		case 1:
			return 'This is Part 2';
		case 2:
			return 'This is Part 3';
		case 3:
			return 'This is Part 4';
		case 4:
			return 'This is Part 5';
		default:
			return 'Unknown Part';
	}
}
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	}
}));

const Video = props => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const urls = getUrls();
	const steps = getSteps(urls);
	
	const handleReset = () => {
		setActiveStep(0);
	};
	
	const handleNext = () => {
		if (activeStep === steps.length - 1) {
			handleReset();
		}
		else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};
	
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	return (
		<div>
			<ReactPlayer 
				url={getUrl(urls, activeStep)}
				playing='true'
				controls='true'
			/>
			<Typography align='left' variant='h5'>Video title</Typography>
			<Typography align='left'>Video description</Typography>
			<div className={classes.root}>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div>
					<Typography className={classes.instructions}>{getStepDescription(activeStep)}</Typography>
					<div>
						<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>Back</Button>
						<Button variant='contained' color='primary' onClick={handleNext}>{activeStep === steps.length - 1 ? 'Reset' : 'Next'}</Button>
					</div>
				</div>	
			</div>
		</div>
	);	
};

export default Video;