import React from "react";
import "./stars.scss";
import Typed from "react-typed";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NoteIcon from '@material-ui/icons/Note';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import CV from '../img/Aditi_Mallavarapu_CV.pdf'
import Publications from './Publications';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './Resume'

class Intro extends React.Component {
  
  render() {
   
    return (
      
      <React.Fragment>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
    <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am a Aditi Mallavarapu.</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Researcher",
                      "Developer",
                      "Instructor"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p>
              A fifth year PhD Student at the Computer Science Deparatment of University of Illinois at Chicago.
              I am currently working towards my thesis titled <i>"Designing Exploration Oriented Formative Feedback in Open-ended Problems". </i>
              My research is multi-disciplinary and lies in the intersection of Human-Computer Interaction (HCI), Data Mining and Learning Sciences.
              </p>
            <BottomNavigation className="intro-icons" showLabels>
                    
               <BottomNavigationAction icon={<NoteIcon />} className= "intro-icons"
               onClick={() => window.open(CV)} label="View Resume" />
               
              
              <BottomNavigationAction icon={<CastForEducationIcon />}  className= "intro-icons btn js-scroll px-4" href="#work" label="View Projects"/>
              View Projects
            </BottomNavigation>  
            
            </div>
          </div>
        </div>
      </div>
     <Resume />
     <Portfolio />
     <Publications/>
     <Contact />
    </React.Fragment>
     
    );
  }
}

export default Intro;
