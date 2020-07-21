import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import sna from '../img/sna.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'

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
