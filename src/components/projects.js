import React from "react";
import openpose from "../img/openpose.png";
import sna from '../img/sna.png'
import causal from "../img/causal.png"
import ctcw from "../img/ctcw.png"
import mining from "../img/mining.png"
import netlogo from "../img/netlogo.png"
import ecocollage from "../img/ecocollage.png"
import CW from "../img/CW.png"
import sequence from "../img/sequence.png"
import pd from "../img/pd.png"
import feedback from "../img/feedback.png"
import gesture from "../img/gesture.png"
import tool from "../img/tool.png"
import carbon from "../img/carbon.png"
import {Link} from 'react-router-dom';
import "./stars.scss";

class Projects extends React.Component {
  render() {
    return (
      <section className="sect-pt4 background"
      style={{marginTop: "100px"}}>
      <div className="container" >
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  A Showcase of Design, Development and Experiments
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
            <div className="row">
            <div className="title-box text-left">
                <h3 className="title" style={{color:"white", marginTop: "10px", marginBottom:"10px"}}>Connected Worlds</h3>
          </div>
              <div className="col-sm-12">
                  <img src={CW} alt="" className="img-fluid" />
                  <p style={{marginTop:"5px", color:"white"}}>
                  My research interests focuss on understanding how learning takes place in
                  open-ended learning environments (where learners learn via exploration). 
                  My most recents projects are related to one such open-ended learning exhibit <b>Connected Worlds.</b> 
                  </p>  
                  <p style={{marginTop:"5px", color:"white"}}>
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
            
            
          </div>
          <div className="title-box text-left">
                <h3 className="title" style={{color:"white", marginTop: "10px", marginBottom:"10px"}}>Recent Projects</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
              <Link to="/openpose" >
                  <div className="work-img">
                    <img src={openpose} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">OpenPose</h2>
                        <div className="w-more">
                          
                            <span className="w-ctegory" >
                              OpenPose and Clustering to Extract Action Poses from Video Data 
                           </span>
                        
                        </div>
                      </div>
                      
                    </div>
                  </div>
               
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              <Link to="/sna" >
                  <div className="work-img">
                    <img src={sna} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Social Network Analysis</h2>
                        <div className="w-more">
                          
                            <span className="w-ctegory" >
                            Social Network Analysis for understanding Collaboration
                           </span>
                        
                        </div>
                      </div>
                    </div>
                  </div>
               
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              
              <Link to="/causal" >
              
                  <div className="work-img">
                    <img src={causal} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Causal Inference</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Causal Modeling for generating formative feedback
                           </span>
                        
                        </div>
                      </div>
                    </div>
                  </div>
               
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/sequence" >
                  <div className="work-img-sm">
                    <img src={sequence} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Lag Sequential Analysis</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Mining Critical Events through Lag Sequential Analysis
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/pd" >
                  <div className="work-img-sm">
                    <img src={pd} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Particpatory Co-design</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Card based Co-design methodology for data-driven tool design
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/dashboard" >
                  <div className="work-img-sm">
                    <img src={ctcw} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Dashboard Design</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Connect-to-Connected Worlds
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
         </div>
          <div className="row">
          <div className="col-md-4">
                <div className="work-box-sm">
              <Link to="/feedback" >
                  <div className="work-img-sm">
                    <img src={feedback} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Empirical Analysis</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Empirical Analysis of Formative Feedback
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
              <div className="col-md-4">
                <div className="work-box-sm">
                <Link to="/mining" >
                  <div className="work-img-sm">
                    <img src={mining} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Data Mining</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                              Mining Connected Worlds
                            </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/netlogo" >
                  <div className="work-img-sm">
                    <img src={netlogo} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Simulation Modelling</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Modelling Connected Worlds
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          
          
          
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/ecocollage" >
                  <div className="work-img-sm">
                    <img src={ecocollage} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Simulation Modelling and urban Planning</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            EcoCollage
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/gesture" >
                  <div className="work-img-sm">
                    <img src={gesture} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Gesture Segmentation</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Gesture Segmentation data using Skeleton Tracking and Machine Learning
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/tool" >
                  <div className="work-img-sm">
                    <img src={tool} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Text Annotating Tool</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            Text annotation Visualizer 
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
         </div>
         <div className="row">
         <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/carbon" >
                  <div className="work-img-sm">
                    <img src={carbon} alt="" className="img-fluid" />
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Visual Analysis</h2>
                        <div className="w-more">
                            <span className="w-ctegory" >
                            World Climate Change Dashboard
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
         </div>
        </div>
      </section>
    );
  }
}

export default Projects;
