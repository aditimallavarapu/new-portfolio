import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ecocollage from '../img/ecocollage.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
import link from '../img/journal1.pdf'

class EcoCollagePage extends Component {
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
                          <h3 className="title-left">Netlogo Based Simulation Modelling and its application for Urban Planning</h3>
                          <h4>Mining Strategic patterns of explorations in Urban Planning based simulation </h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={ecocollage} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Designed metrics to evaluate and track the learners’ spatial reasoning skills in an Urban planning-oriented game. Extensively used spatial metrics like Ripley’s K and ecology metrics as a measure for spatial reasoning and applied regression to characterize the different spatial arrangements in terms of their infiltrations achieved as good and bad strategies. The results were used to examine if the user interface design affected the way in which learners approached exploring the problem space: did they use different spatial strategies, or discover them more quickly or more slowly, when using different user interfaces?
                             </h6>
                             <h6>
                                 <u>Related Publication: </u>
                                 <div>
                                    <b>Mallavarapu, A.,</b>Lyons, L., Slattery, B., Shelley, T., Minor, E., Zellner, M. (2015). Developing Computational Methods to Measure and Track Learners’ Spatial Reasoning in an Open-Ended Simulation.<i>Journal of Educational Data Mining </i> 7(2), 49-82.
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

export default EcoCollagePage;