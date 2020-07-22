import React from 'react'
import {BrowserRouter as Router, Route, 
        Switch} from 'react-router-dom'
import Intro from './intro'
import Resume from './Resume'
import Portfolio from './portfolio'
import Publications from './Publications'
import Contact from './contact'
import openposePage from '../Projects/openpose'
import snaPage from '../Projects/sna'
import causalPage from '../Projects/causal'
import dashboardPage from '../Projects/dashboard'
import miningPage from '../Projects/mining'
import Projects from '../components/projects.js'
import netlogoPage from '../Projects/netlogo'
import EcoCollagePage from '../Projects/EcoCollage'

const CustomRoute = () => {
    return (
      
          <Switch>
            <Route path="/aditi-portfolio/" component={Intro} exact />
            <Route path="/aditi-portfolio/experience" component={Resume} />
            <Route path="/aditi-portfolio/publications" component={Publications} />
            <Route path="/aditi-portfolio/portfolio" component={Portfolio} />
            <Route path="/aditi-portfolio/projects" component={Projects} />
            <Route path="/aditi-portfolio/contact-me" component={Contact} />
            {/*<Route path="/blogs" component={blogs} />*/}
            <Route path="/aditi-portfolio/openpose" component={openposePage} />
            <Route path="/aditi-portfolio/sna" component={snaPage} />
            <Route path="/aditi-portfolio/causal" component={causalPage} />
            <Route path="/aditi-portfolio/dashboard" component={dashboardPage} />
            <Route path="/aditi-portfolio/mining" component={miningPage} />
            <Route path="/aditi-portfolio/netlogo" component={netlogoPage} />
            <Route path="/aditi-portfolio/ecocollage" component={EcoCollagePage} />
           {/* <Route component={NotFound}/>*/}
          </Switch> 
       
    )
}

export default CustomRoute;