import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ctcw from '../img/ctcw.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
import link from "../img/conference1.pdf"
import CW from '../img/CW.png'
class dashboardPage extends Component {
  render() {
    return(
        <>
        <section id="openpose" className="sect-pt4 route subskill background" >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Dashboard Design</h3>
                          <h4>Connect-to-Connected Worlds </h4>
                        </div>
                        <div className="row" style={{marginTop:"0px"}}>
                        <div className="text-left">
                          <h5 className="title" style={{marginTop: "5px", marginBottom:"0px"}}>Connected Worlds</h5>
                        </div>
                        <div className="col-sm-12">
                              <img src={CW} alt="" className="img-fluid" />
                              <p style={{marginTop:"5px"}}>
                              My research interests focuss on understanding how learning takes place in
                              open-ended learning environments (where learners learn via exploration). 
                              My most recents projects are related to one such open-ended learning exhibit <b>Connected Worlds.</b> 
                              </p>  
                              <p style={{marginTop:"5px"}}>
                                Currently operating at the New York Hall of Science, 
                                Connected Worlds is a 250m<sup>2</sup> immersive digital 
                                exhibit that invites up to 50 simultaneous visitors 
                                into an open-ended, visitor-driven simulation of 
                                ecosystem interaction. The exhibit represents 
                                an ecosystem (as digital projections on exhibits wall) 
                                consisting of four plantable biomes, named Desert, Plains, 
                                Jungle, and Wetlands, and three sources of water in the 
                                form of reservoirs, mountain valley with an occasional 
                                stream and the 6-feet tall water fall (See image above).
                                Visitors interact 
                                with the simulated environment by taking physical actions 
                                that are captured by the exhibit's system of 12 Kinect 
                                cameras and three infrared cameras that respond in immediate 
                                environment changes. The visitors can 1) raise their hands 
                                in front of the projected biomes to cause seeds to be 
                                planted at that physical location and 2) they can move the 
                                foam "logs" (detectable by IR camera) to divert water 
                                flow  towards different biomes. Water flowing into a biome 
                                acts as source of water for
                                the plants in the biome.
                                  When a biome has access to sufficient water reserves, 
                                  the planted seeds grow and the biome flourishes to attract
                                  different animals. The plants in the biomes cause water 
                                  from the biomes to evaporate and form clouds, which can 
                                  return water to the ecosystem, thus emulating a 
                                  real-world water cycle.
                                  </p>
                          </div>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={ctcw} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Connect-to-Connected Worlds
Created web-based tablet support for facilitators, researchers and visitors to the New York Hall of Science’s Connected Worlds immersive simulation exhibit. This involved creating architecture to scrape live data from the exhibit while it is in use, deliver it to a database, and visualize the results in an on-demand fashion on tablets carried within the exhibit. These live, dynamic data visualizations can help visitors understand how their manipulations affect the simulated 
ecosystem’s sustainability. 

                             </h6>
                             <h6>
                                 <u>Related Publication: </u>
                                 <div>
                                    <b>Mallavarapu, A.,</b>Lyons, L., Uzzo, S., Thompson, W., Levy-Cohen, R., & Slattery, B. (2019, April). Connect-to-Connected Worlds: Piloting a Mobile, Data-Driven Reflection Tool for an Open-Ended Simulation at a Museum. <i>In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems</i> (p. 7). ACM
                                <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                             </h6>
                            </Cell>
                        </Grid>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row load-more">
            <div className="col-12">
              <SeeMore/>
            </div>
          </div>
        </section>
        </>
    )
  }
}

export default dashboardPage;
