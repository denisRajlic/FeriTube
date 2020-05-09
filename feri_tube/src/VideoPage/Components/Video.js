import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import Stepper from'@material-ui/core/Stepper';
import Step from'@material-ui/core/Step';
import StepLabel from'@material-ui/core/StepLabel';
//import StepButton from'@material-ui/core/StepButton';
import {makeStyles} from'@material-ui/core/styles';
import {withStyles} from'@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from "axios";
import Async from 'react-async';

function getSteps(urls) {
	var steps = [];
	for(var i = 1; i < urls.length + 1; i++) {
		steps.push("Part " + i);
	}
	return steps;
}

function getStepDescription(numOfUrls, step) {
	for(var i = 0; i < numOfUrls; i++) {
		if(step === i) {
			var num = i + 1; 
			return 'This is Part ' + num;
		}
	}
}
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		//backgroundColor: "red"
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	}
}));
	
/*
const Video = props => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const urls = getUrls();
	//console.log(urls.length);
	//const titles = getTitles();
	const descriptions = getDescriptions();
	const ids = getIds();
	const steps = getSteps(urls);
	//const assets = getAssets();
	//console.log(assets);
	
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
					//playing={true}
					controls={true}
				/>
				<Typography align='left' variant='h5' style={{"marginTop":8, "marginBottom":10}}>asd</Typography>
				<Typography align='left'>ad</Typography>
				<div className={classes.root}>
					<Stepper activeStep={activeStep} alternativeLabel style={{"backgroundColor":"rgb(241, 251, 255)"}}>
						{steps.map((label) => (
							<Step key="step">
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						<Typography className={classes.instructions}>{getStepDescription(urls.length, activeStep)}</Typography>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>Back</Button>
							<Button variant='contained' color='primary' onClick={handleNext}>{activeStep === steps.length - 1 ? 'Reset' : 'Next'}</Button>
						</div>
					</div>	
				</div>
			</div>
		);	
	
	
};*/

function getUrls(assets) {
	var urls = [];
	for(var i = 0; i < assets.length; i++) {
		urls.push(assets[i].url);
	}
	return urls;
}

class Video extends Component {
	constructor() {
		super();
		this.state = { data: null, activeStep: 0};
	}	

	async componentDidMount() {
		try {
			const response = await fetch("api/v1/lecture/1");
			if(!response.ok) {
				throw Error(response.statusText);
			}
			const json = await response.json();
			this.setState({ data: json });
		}
		catch(error) {
			console.log(error);
		}
	}

	render() {
		const data = this.state.data;
		var activeStep = this.state.activeStep;
		console.log(this.state.data);
		var url;
		var title;
		var description;
		var urls = [];
		if(data === null) {
			url = "";
			title = "";
			description = "";
			urls = [];
		}
		else {
			urls = getUrls(data.data.relationships.assets);
			if(activeStep != null) {
				console.log(this.state.activeStep)
				url = urls[this.state.activeStep];
				title = data.data.relationships.assets[this.state.activeStep].title;
				description = data.data.relationships.assets[this.state.activeStep].description;
			}
		}
		
		const steps = getSteps(urls);
		return (
			<div>
				<ReactPlayer 
					url={url}
					playing={true}
					controls={true}
					style={{"margin": "auto", "width": "100%"}}
				/>
				<Typography align='left' variant='h5' style={{"marginTop":8, "marginBottom":10}}>{title}</Typography>
				<Typography align='left'>{description}</Typography>
				<div className="root">
					<Stepper activeStep={activeStep} alternativeLabel style={{"backgroundColor":"rgb(241, 251, 255)"}}>
						{steps.map((label) => (
							<Step key="step">
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						<Typography className="instructions">{getStepDescription(urls.length, this.state.activeStep)}</Typography>
						<div>
							<Button disabled={this.state.activeStep === 0} onClick={() => this.setState({ activeStep: this.state.activeStep - 1 })} className="backButton">Back</Button>
							<Button variant='contained' color='primary' onClick={this.state.activeStep === steps.length - 1 ? () => this.setState({ activeStep: 0 }) : () => this.setState({ activeStep: this.state.activeStep + 1 })}>{this.state.activeStep === steps.length - 1 ? 'Reset' : 'Next'}</Button>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default Video;