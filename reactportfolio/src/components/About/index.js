
// React Components
import React from 'react';
import "./index.css";

// Custom Components

// Material UI Components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Styles
const useStyles = makeStyles((theme) => ({
    about: {
        color: '#f8f9fa',
        minHeight: 500,
    },
    typography: {
        color: '#212529',
        fontSize: '3rem',
        lineHeight: "2.5rem",
        fontWeight: 700,
        marginBottom: 14,
        fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    body: {
        color: '#212529',
        fontSize: '1rem',
        marginTop: 14,
        marginRight: 14,
        marginLeft: 14,
    },
    button: {
        textTransform: 'unset !important',
        margin: 5,
        color: '#000000',
        background: '#ffc107',
        '&:hover': {
          color: '#000000',
          background: "#e0a800",
      },
    },
    grid: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    paragraph: {
        display: "flex",
        justifyContent: "center",
    }
}));

// About Component
export default function About() {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.about} >
                <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: 500 }}>
                    <div>
                     <Grid item xs={12} align="center" className={classes.grid}>
                        <Typography align="center" variant="h4" className={classes.typography}>ABOUT</Typography>                          
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><Icon className="fas fa-question" /></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <Grid container alignItems="top" justify="center" className={classes.paragraph}>
                            <Grid item xs={9} sm={9} md={3}>
                            <Typography align="left" variant="body1" className={classes.body}>Hi! My name is <strong>Jamie Sinclair</strong> I have a strong interest in front end web design and development.</Typography>                        
                            </Grid>
                            <Grid item xs={9} sm={9} md={3}>
                            <Typography align="left" variant="body1" className={classes.body}>I have skills in CSS, SCSS, Javascript, HTML5, HTML, JQuery using skills in Photoshop, InVision and Illustrator to design a concept.</Typography>                                                    
                            </Grid>
                        </Grid>
                   </Grid>
                   </div>
                </Grid>
            </div>
        </div>
    );
}
