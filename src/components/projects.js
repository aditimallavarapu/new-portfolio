import React from "react";
import openpose from "../img/openpose.png";
import sna from '../img/sna.png'
import causal from "../img/causal.png"
import ctcw from "../img/ctcw.png"
import mining from "../img/mining.png"
import netlogo from "../img/netlogo.png"
import ecocollage from "../img/ecocollage.png"
import {Link} from 'react-router-dom';
import "./stars.scss";

class Portfolio extends React.Component {
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
          </div>
          <div className="title-box text-left">
                <h3 className="title" style={{color:"white", marginTop: "10px", marginBottom:"10px"}}>Recent Projects</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
              <Link to="/aditi-portfolio/openpose" >
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
              <Link to="/aditi-portfolio/sna" >
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
              
              <Link to="/aditi-portfolio/causal" >
              
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
          <div className="title-box text-left">
                <h3 className="title" 
                style={{color:"white", 
                marginTop: "10px", 
                marginBottom:"10px"}}>
               Previous Projects
            </h3>
          </div>
          <div className="row">
            
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/aditi-portfolio/dashboard" >
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
            <div className="col-md-4">
              <div className="work-box-sm">
              <Link to="/aditi-portfolio/mining" >
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
              <Link to="/aditi-portfolio/netlogo" >
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
              <Link to="/aditi-portfolio/ecocollage" >
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
          </div>
         
        </div>
      </section>
    );
  }
}

export default Portfolio;
