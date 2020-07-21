import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000046",  /* fallback for old browsers */
background: "-webkit-linear-gradient(to right, #1CB5E0, #000046)",  /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #1CB5E0, #000046)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid black",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid black",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "white white transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "black",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent white white",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "black",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "white",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "white",
  },
  subtitle1: {
    color: "white",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h3" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          New York Hall of Science, NY 
          </Typography>
          <Typography ariant="body1" align="center" className={classes.body1}>
          May 2020 – Present
          </Typography>
          <Typography ariant="body1" align="center" className={classes.body1}>
          Dec 2019 – Jan 2019
          </Typography>
          <Typography ariant="body1" align="center" className={classes.body1}>
          June 2019-Aug 2019
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Planned and conducted participatory design sessions for dashboard design while iteratively deploying data-collection routines, data mining algorithms, web-based dashboard (full stack in React and MongoDB) and visualizations (D3) for visitor exhibit interaction data.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Teaching Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          University of Illinois at Chicago, IL 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          May 2016-Present 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            In-charge of developing curriculum, designing labs and homework assignments, grading, conducting labs, instructing course materials and managing other teaching assistants for the course.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Adjunct Professor
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          University of Illinois at Chicago, IL 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          May 2018-Aug 2018
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designed the curriculum and lead classes for Saturday College through UIC Chance Program for high-school students for introductory programming and Computer Science.
            Lead classes and labs for 30 high school seniors, to pique their interest in Computer Science through an introductory course of Discovering Computer Science.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          New York Hall of Science, NY 
          </Typography>
          
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Deployed python scripts to scrape live data from exhibit use, design dashboard visualizations, computer vision routines to analyze video data for a multi-user museum exhibit.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Consultant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Perficient Inc, Chicago, IL
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Feb 2015–Aug 2016
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Responsible for the design, development and testing of web application and integration of web-based services for a healthcare client.          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2013
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Network Software Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Tarana Wireless Inc., Santa Clara, CA
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Jun 2013–Dec 2013
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Deployed applications to work with SNMP to get information from multiple remote devices in python. 
         </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2011
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Programmer Analyst Trainee
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Cognizant Technology Solutions, Pune , India
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           Aug 2011–Aug 2012
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Designed an application for data analysis for very large databases (Frontend and Backend) Worked on a prediction tool OpenForecast to predict user interactions on the tool. Was a part of the team that designed a website for a client to send notifications about changes in data.         </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
