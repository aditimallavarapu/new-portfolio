import React from "react";
import openpose from "../img/openpose.png";
import sna from '../img/sna.png'
import causal from "../img/causal.png"
import {Link} from 'react-router-dom';
import "./stars.scss";
import LoadMore from '../components/LoadMore'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route background"
      >
     
      <div className="container">
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
        </div>
        <div className="row load-more">
          <div className="col-12">
            <LoadMore /> 
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
