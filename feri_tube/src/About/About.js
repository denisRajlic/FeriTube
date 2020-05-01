import React from 'react';
import Content from './Content/Content';
import Grid from '@material-ui/core/Grid';

const About = props => {
    return (
        <div style={{ margin: '15px' }}>
            <Grid container alignItems='center' justify='center' allign='center'>
                <Grid item>
                    <Content />
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
