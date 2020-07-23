import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import sna from '../img/sna.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
import CW from '../img/CW.png'
class snaPage
 extends Component {
  render() {
    return(
        <>
        <section id="openpose" className="sect-pt4 route subskill background" 
       >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Social Network Analysis</h3>
                          <h4>Social Network Analysis for understanding Collaboration </h4>
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
                            <img src={sna} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Constructed a low-cost, low-effort,  ethical method to extract “collaboration temperature” from social structures in a co-located museum environment, captured through video data. For each frame network was constructed using the principles of proxemics, social network analysis was used to extract features of collaboration, which were then clustered using KMeans algorithm to decipher social structures. We term the combinations of these social structures as “collaborative temperature” which can be used to understand the collaborative state of the visitors’ interactions in the exhibit. The “collaborative temperature” was used to understand the impact of an educational intervention.
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

export default snaPage;
