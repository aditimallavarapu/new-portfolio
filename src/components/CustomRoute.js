import React from 'react'
import {Route, 
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
            <Route path="/" component={Intro} exact />
            <Route path="/experience" component={Resume} />
            <Route path="/publications" component={Publications} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact-me" component={Contact} />
            {/*<Route path="/blogs" component={blogs} />*/}
            <Route path="/openpose" component={openposePage} />
            <Route path="/sna" component={snaPage} />
            <Route path="/causal" component={causalPage} />
            <Route path="/dashboard" component={dashboardPage} />
            <Route path="/mining" component={miningPage} />
            <Route path="/netlogo" component={netlogoPage} />
            <Route path="/ecocollage" component={EcoCollagePage} />
           {/* <Route component={NotFound}/>*/}
          </Switch> 
       
    )
}

export default CustomRoute;