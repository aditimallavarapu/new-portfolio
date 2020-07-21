import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ctcw from '../img/ctcw.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
import link from "../img/conference1.pdf"

class dashboardPage
 extends Component {
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
