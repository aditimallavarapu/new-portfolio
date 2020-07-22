import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import School from "@material-ui/icons/School";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "transparent",
    marginTop:"0px",
    
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      fontSize: "2em",
      "&:hover": {
        fill: "black",
        fontSize: "2.2rem",
      },
    },
    "& .icon-black *:not(g)" : {
      fill: "black",
    }
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} onClick={() => window.open('https://linkedin.com/in/aditi-mallavarapu-1a691658')} />
      <BottomNavigationAction icon={<Github />} className={classes.root} onClick={() => window.open('https://github.com/aditimallavarapu')} />
      <BottomNavigationAction icon={<School />} className={classes.root} onClick={() => window.open('https://scholar.google.com/citations?user=o4XGBswAAAAJ&hl=en')} />
    </BottomNavigation>
  );
};
export default Footer;
